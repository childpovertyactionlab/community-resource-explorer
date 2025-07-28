pipeline {
    agent {
        docker {
            image 'node:18-bullseye'
            label ''
        }
    }

    environment {
        DEPLOY_ENV = "${env.BRANCH_NAME == 'master' ? 'prod' : 'dev'}"
        AWS_REGION = "${env.BRANCH_NAME == 'master' ? 'us-east-1' : 'us-east-2'}"
        VCS_REF = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
        PROJECT_NAME = 'community-resource-explorer'
        // Base path for secrets in AWS Secrets Manager
        SECRET_BASE_PATH = "${PROJECT_NAME}/${DEPLOY_ENV}"
    }

    stages {
        stage('Load Secrets') {
            steps {
                script {
                    withCredentials([aws(credentialsId: 'jenkins-main', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                        echo "Loading secrets from AWS Secrets Manager for ${DEPLOY_ENV} environment"
                        sh '''
                        #!/bin/bash
                        set -e
                       
                        # Fetch individual secrets from Secrets Manager
                        echo "Fetching secrets from ${SECRET_BASE_PATH}/*"
                        
                        # Get Mapbox API Token
                        MAPBOX_SECRET="${SECRET_BASE_PATH}/mapbox-api-token"
                        echo "Fetching $MAPBOX_SECRET"
                        GATSBY_MAPBOX_TOKEN=$(aws secretsmanager get-secret-value \
                            --secret-id "$MAPBOX_SECRET" \
                            --query SecretString --output text 2>/dev/null || echo "")
                        
                        # Get GA Tracking ID
                        GA_SECRET="${SECRET_BASE_PATH}/ga-tracking-id"
                        echo "Fetching $GA_SECRET"
                        GATSBY_GA_TRACKING_ID=$(aws secretsmanager get-secret-value \
                            --secret-id "$GA_SECRET" \
                            --query SecretString --output text 2>/dev/null || echo "")
                        
                        # Get Mapbox User
                        MAPBOX_USER_SECRET="${SECRET_BASE_PATH}/mapbox-user"
                        echo "Fetching $MAPBOX_USER_SECRET"
                        GATSBY_MAPBOX_USER=$(aws secretsmanager get-secret-value \
                            --secret-id "$MAPBOX_USER_SECRET" \
                            --query SecretString --output text 2>/dev/null || echo "")
                        
                        export GATSBY_MAPBOX_TOKEN
                        export GATSBY_GA_TRACKING_ID
                        export GATSBY_MAPBOX_USER
                        export AWS_REGION
                        
                        export TF_VAR_aws_region="$AWS_REGION"
                        export TF_VAR_mapbox_api_token="$GATSBY_MAPBOX_TOKEN"
                        export TF_VAR_ga_tracking_id="$GATSBY_GA_TRACKING_ID"
                        export TF_VAR_mapbox_user="$GATSBY_MAPBOX_USER"
                        
                        echo "GATSBY_MAPBOX_TOKEN=$GATSBY_MAPBOX_TOKEN" > env.export
                        echo "GATSBY_GA_TRACKING_ID=$GATSBY_GA_TRACKING_ID" >> env.export
                        echo "GATSBY_MAPBOX_USER=$GATSBY_MAPBOX_USER" >> env.export
                        echo "AWS_REGION=$AWS_REGION" >> env.export
                        echo "TF_VAR_aws_region=$TF_VAR_aws_region" >> env.export
                        echo "TF_VAR_mapbox_api_token=$TF_VAR_mapbox_api_token" >> env.export
                        echo "TF_VAR_ga_tracking_id=$TF_VAR_ga_tracking_id" >> env.export
                        echo "TF_VAR_mapbox_user=$TF_VAR_mapbox_user" >> env.export
                        '''
                    }
                }
            }
        }
        
        stage('Setup & Build') {
            steps {
                script {
                    withEnv(readFile('env.export').split('\n') as List) {
                        echo "Building Gatsby site for ${DEPLOY_ENV} environment"
                        sh """
                        # Install system dependencies needed for native module compilation
                        apt-get update && apt-get install -y --no-install-recommends python3 make g++
                        echo "Using Node \$(node -v)"
                        npm ci --legacy-peer-deps
                        npm install @parcel/watcher@2.0.5 --no-save
                        npm run build
                        """
                    }
                }
            }
        }

        stage('Terraform Deploy') {
            steps {
                script {
                    withEnv(readFile('env.export').split('\n') as List) {
                        withCredentials([aws(credentialsId: 'jenkins-main', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                            dir("terraform/environments/${DEPLOY_ENV}") {
                                sh """
                                #!/bin/sh
                                set -e
                                echo "Deploying to ${DEPLOY_ENV} environment"
                                
                                # Create environment-specific terraform.tfvars
                                cat > terraform.tfvars <<EOF
environment = "${DEPLOY_ENV}"
aws_region  = "${TF_VAR_aws_region}"

# Application secrets from Jenkins environment
mapbox_api_token = "${TF_VAR_mapbox_api_token}"
ga_tracking_id   = "${TF_VAR_ga_tracking_id}"
mapbox_user      = "${TF_VAR_mapbox_user}"
EOF
                                
                                echo "Generated terraform.tfvars for ${DEPLOY_ENV}:"
                                cat terraform.tfvars
                                
                                # Install Terraform
                                wget https://releases.hashicorp.com/terraform/1.5.7/terraform_1.5.7_linux_amd64.zip
                                unzip -o terraform_1.5.7_linux_amd64.zip
                                chmod +x terraform
                                export PATH=\$PATH:\$(pwd)
                                # Initialize Terraform
                                terraform init -input=false
                                
                                # Run terraform plan first to check for conflicts
                                echo "Running terraform plan to check for conflicts..."
                                if terraform plan -var-file="terraform.tfvars" -detailed-exitcode; then
                                    echo "No changes needed, infrastructure is up to date"
                                elif [ \$? -eq 2 ]; then
                                    echo "Changes detected, applying terraform..."
                                    terraform apply -input=false -auto-approve -var-file="terraform.tfvars"
                                else
                                    echo "Terraform plan failed, checking for resource conflicts..."
                                    # Try to refresh state to sync with existing resources
                                    terraform refresh -var-file="terraform.tfvars" || true
                                    echo "Retrying terraform apply after refresh..."
                                    terraform apply -input=false -auto-approve -var-file="terraform.tfvars"
                                fi
                                """
                            }
                        }
                    }
                }
            }
        }
        
        stage('Upload to S3 & Invalidate CloudFront') {
            steps {
                script {
                    withEnv(readFile('env.export').split('\n') as List) {
                        withCredentials([aws(credentialsId: 'jenkins-main', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                            sh """
                            #!/bin/sh
                            set -e
                            
                            # Install AWS CLI to user directory (no root needed)
                            echo "Installing AWS CLI..."
                            rm -rf awscliv2.zip aws/ aws-cli/ aws-cli-bin/
                            curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
                            unzip -o awscliv2.zip
                            ./aws/install --install-dir ./aws-cli --bin-dir ./aws-cli-bin
                            export PATH=\$PATH:./aws-cli-bin
                            rm -rf awscliv2.zip aws/
                            
                            echo "Uploading built site to S3"
                            
                            S3_BUCKET="${PROJECT_NAME}-${DEPLOY_ENV}-static"
                            echo "Target S3 bucket: \$S3_BUCKET"
                            
                            # Sync the built site to S3, deleting any removed files
                            aws s3 sync ${WORKSPACE}/public s3://\$S3_BUCKET --delete --acl private --region ${AWS_REGION}
                            
                            # Get the CloudFront distribution ID and create an invalidation
                            echo "Creating CloudFront invalidation"
                            DISTRIBUTION_ID=\$(aws cloudfront list-distributions \\
                                --query "DistributionList.Items[?Comment=='${PROJECT_NAME} ${DEPLOY_ENV} distribution'].Id" \\
                                --output text)
                            
                            if [ -n "\$DISTRIBUTION_ID" ]; then
                                echo "Found CloudFront distribution: \$DISTRIBUTION_ID"
                                aws cloudfront create-invalidation \\
                                    --distribution-id \$DISTRIBUTION_ID \\
                                    --paths "/*"
                                echo "CloudFront invalidation created"
                            else
                                echo "Warning: Could not find CloudFront distribution for ${PROJECT_NAME} ${DEPLOY_ENV}"
                            fi
                            """
                        }
                    }
                }
            }
        }
    }


}

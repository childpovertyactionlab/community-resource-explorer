pipeline {
    agent {
        label 'agent'
    }

    environment {
        DEPLOY_ENV = "${env.BRANCH_NAME == 'develop' ? 'prod' : 'dev'}"
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
                        
                        AWS_REGION="us-east-1"
                        
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
                        echo "Using Node \$(node -v)"
                        npm ci --legacy-peer-deps
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
                            dir('terraform') {
                                sh """
                                #!/bin/sh
                                set -e
                                echo "Deploying to ${DEPLOY_ENV} environment"
                                # Select the terraform workspace corresponding to the environment
                                terraform workspace select ${DEPLOY_ENV} || terraform workspace new ${DEPLOY_ENV}
                                # Initialize Terraform
                                terraform init -input=false
                                # Apply the plan
                                terraform apply -input=false -auto-approve
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
                            echo "Uploading built site to S3"
                            
                            S3_BUCKET="${PROJECT_NAME}-${DEPLOY_ENV}-static"
                            echo "Target S3 bucket: $S3_BUCKET"
                            
                            # Sync the built site to S3, deleting any removed files
                            aws s3 sync ${WORKSPACE}/public s3://$S3_BUCKET --delete --acl private
                            
                            # Get the CloudFront distribution ID and create an invalidation
                            echo "Creating CloudFront invalidation"
                            DISTRIBUTION_ID=\$(aws cloudfront list-distributions \
                                --query "DistributionList.Items[?Comment=='${PROJECT_NAME} ${DEPLOY_ENV} distribution'].Id" \
                                --output text)
                            
                            if [ -n "\$DISTRIBUTION_ID" ]; then
                                echo "Found CloudFront distribution: \$DISTRIBUTION_ID"
                                aws cloudfront create-invalidation \
                                    --distribution-id \$DISTRIBUTION_ID \
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

terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# S3 and CloudFront for static hosting
module "static_hosting" {
  source = "./modules/s3-cloudfront"
  
  project_name  = var.project_name
  environment   = var.environment
  domain_name   = var.domain_name
  aws_region    = var.aws_region
  price_class   = var.price_class
}

# Route 53 for DNS management (only when domain is specified)
module "route53" {
  count  = var.domain_name != null ? 1 : 0
  source = "./modules/route53"
  
  domain_name            = var.domain_name
  cloudfront_domain_name = module.static_hosting.cloudfront_domain_name
  cloudfront_zone_id     = module.static_hosting.cloudfront_zone_id
  environment           = var.environment
}

# Secrets Manager for environment variables
module "secrets" {
  source = "./modules/secrets"
  
  project_name = var.project_name
  environment  = var.environment
  secrets = {
    mapbox_api_token = var.mapbox_api_token
    ga_tracking_id   = var.ga_tracking_id
    mapbox_user      = var.mapbox_user
  }
}

# Monitoring and alerting
module "monitoring" {
  source = "./modules/monitoring"
  
  project_name           = var.project_name
  environment           = var.environment
  s3_bucket_name        = module.static_hosting.s3_bucket_name
  cloudfront_distribution_id = module.static_hosting.cloudfront_distribution_id
  aws_region                = var.aws_region
}
terraform {
  required_version = ">= 1.0"
  
  backend "s3" {
    bucket         = "cre-terraform-state-prod"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}

module "infrastructure" {
  source = "../../"
  
  project_name = "community-resource-explorer"
  environment  = "prod"
  # domain_name  = null  # Use CloudFront default domain
  
  # Environment variables - populate via terraform.tfvars
  mapbox_api_token = var.mapbox_api_token
  ga_tracking_id   = var.ga_tracking_id  
  mapbox_user      = var.mapbox_user
}
variable "mapbox_api_token" {
  description = "Mapbox API token for maps functionality"
  type        = string
  sensitive   = true
}

variable "ga_tracking_id" {
  description = "Google Analytics tracking ID"
  type        = string
  sensitive   = true
}

variable "mapbox_user" {
  description = "Mapbox username"
  type        = string
  sensitive   = true
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (dev, prod)"
  type        = string
  default     = "prod"
}

variable "price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_All"
}
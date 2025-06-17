variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "community-resource-explorer"
}

variable "environment" {
  description = "Environment name (dev, prod)"
  type        = string
  validation {
    condition     = contains(["dev", "prod"], var.environment)
    error_message = "Environment must be either 'dev' or 'prod'."
  }
}

variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100"
}

variable "domain_name" {
  description = "Domain name for the application"
  type        = string
  default     = null
}

variable "mapbox_api_token" {
  description = "Mapbox API token for maps functionality"
  type        = string
  sensitive   = true
  default     = ""
}

variable "ga_tracking_id" {
  description = "Google Analytics tracking ID"
  type        = string
  sensitive   = true
  default     = ""
}

variable "mapbox_user" {
  description = "Mapbox username"
  type        = string
  sensitive   = true
  default     = ""
}
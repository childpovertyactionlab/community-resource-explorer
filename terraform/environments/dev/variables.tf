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

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-2"
}

variable "environment" {
  description = "Environment name (dev, prod)"
  type        = string
  default     = "dev"
}
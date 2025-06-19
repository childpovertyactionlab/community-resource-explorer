variable "domain_name" {
  description = "Domain name for the hosted zone"
  type        = string
}

variable "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  type        = string
}

variable "cloudfront_zone_id" {
  description = "CloudFront distribution zone ID"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}
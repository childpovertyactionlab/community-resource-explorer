output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = module.static_hosting.s3_bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.static_hosting.cloudfront_distribution_id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = module.static_hosting.cloudfront_domain_name
}

output "website_url" {
  description = "Website URL"
  value       = var.domain_name != null ? "https://${var.domain_name}" : module.static_hosting.cloudfront_domain_name
}

output "route53_zone_id" {
  description = "Route 53 hosted zone ID"
  value       = var.domain_name != null ? module.route53[0].zone_id : null
}

output "route53_name_servers" {
  description = "Route 53 name servers"
  value       = var.domain_name != null ? module.route53[0].name_servers : null
}

output "secrets_manager_arns" {
  description = "ARNs of secrets in Secrets Manager"
  value       = module.secrets.secret_arns
  sensitive   = true
}
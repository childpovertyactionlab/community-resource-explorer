output "website_url" {
  description = "Website URL"
  value       = module.infrastructure.website_url
}

output "s3_bucket_name" {
  description = "S3 bucket name for static hosting"
  value       = module.infrastructure.s3_bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.infrastructure.cloudfront_distribution_id
}

output "route53_name_servers" {
  description = "Route 53 name servers"
  value       = module.infrastructure.route53_name_servers
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = module.infrastructure.cloudfront_domain_name
}
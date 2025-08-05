output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.website.bucket
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.website.arn
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_zone_id" {
  description = "CloudFront distribution zone ID"
  value       = aws_cloudfront_distribution.website.hosted_zone_id
}

output "acm_certificate_arn" {
  description = "ACM certificate ARN"
  value       = var.domain_name != null ? aws_acm_certificate.website[0].arn : null
}
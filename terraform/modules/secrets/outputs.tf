output "secret_arns" {
  description = "ARNs of all secrets"
  value = {
    mapbox_api_token = aws_secretsmanager_secret.mapbox_api_token.arn
    ga_tracking_id   = aws_secretsmanager_secret.ga_tracking_id.arn
    mapbox_user      = aws_secretsmanager_secret.mapbox_user.arn
  }
}

output "secrets_access_role_arn" {
  description = "ARN of the IAM role for accessing secrets"
  value       = aws_iam_role.secrets_access.arn
}
# Secrets Manager secrets for environment variables
resource "aws_secretsmanager_secret" "mapbox_api_token" {
  name                    = "${var.project_name}/${var.environment}/mapbox-api-token"
  description             = "Mapbox API token for ${var.project_name} ${var.environment}"
  recovery_window_in_days = var.environment == "prod" ? 30 : 0

  tags = {
    Name = "${var.project_name}-${var.environment}-mapbox-token"
  }
}

resource "aws_secretsmanager_secret_version" "mapbox_api_token" {
  count         = var.secrets.mapbox_api_token != "" ? 1 : 0
  secret_id     = aws_secretsmanager_secret.mapbox_api_token.id
  secret_string = var.secrets.mapbox_api_token
}

resource "aws_secretsmanager_secret" "ga_tracking_id" {
  name                    = "${var.project_name}/${var.environment}/ga-tracking-id"
  description             = "Google Analytics tracking ID for ${var.project_name} ${var.environment}"
  recovery_window_in_days = var.environment == "prod" ? 30 : 0

  tags = {
    Name = "${var.project_name}-${var.environment}-ga-tracking-id"
  }
}

resource "aws_secretsmanager_secret_version" "ga_tracking_id" {
  count         = var.secrets.ga_tracking_id != "" ? 1 : 0
  secret_id     = aws_secretsmanager_secret.ga_tracking_id.id
  secret_string = var.secrets.ga_tracking_id
}

resource "aws_secretsmanager_secret" "mapbox_user" {
  name                    = "${var.project_name}/${var.environment}/mapbox-user"
  description             = "Mapbox username for ${var.project_name} ${var.environment}"
  recovery_window_in_days = var.environment == "prod" ? 30 : 0

  tags = {
    Name = "${var.project_name}-${var.environment}-mapbox-user"
  }
}

resource "aws_secretsmanager_secret_version" "mapbox_user" {
  count         = var.secrets.mapbox_user != "" ? 1 : 0
  secret_id     = aws_secretsmanager_secret.mapbox_user.id
  secret_string = var.secrets.mapbox_user
}

# IAM role for accessing secrets (for CI/CD pipeline)
resource "aws_iam_role" "secrets_access" {
  name = "${var.project_name}-${var.environment}-secrets-access"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = ["codebuild.amazonaws.com", "ecs-tasks.amazonaws.com"]
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "secrets_access" {
  name = "${var.project_name}-${var.environment}-secrets-policy"
  role = aws_iam_role.secrets_access.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue"
        ]
        Resource = [
          aws_secretsmanager_secret.mapbox_api_token.arn,
          aws_secretsmanager_secret.ga_tracking_id.arn,
          aws_secretsmanager_secret.mapbox_user.arn
        ]
      }
    ]
  })
}
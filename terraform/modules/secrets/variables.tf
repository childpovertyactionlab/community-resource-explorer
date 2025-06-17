variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "secrets" {
  description = "Map of secrets to store"
  type = object({
    mapbox_api_token = string
    ga_tracking_id   = string
    mapbox_user      = string
  })
  sensitive = true
}
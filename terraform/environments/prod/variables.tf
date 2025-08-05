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
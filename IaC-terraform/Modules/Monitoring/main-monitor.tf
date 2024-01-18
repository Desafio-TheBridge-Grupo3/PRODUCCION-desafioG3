resource "azurerm_log_analytics_workspace" "log-analytics-WS" {
  name                = var.log_analytics_workspace_name
  location            = var.location
  resource_group_name = var.resource-group-name
}
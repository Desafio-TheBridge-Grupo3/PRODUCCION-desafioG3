# Container registry
resource "azurerm_container_registry" "my_containers" {
  name                = var.container_registry_name
  resource_group_name = var.resource-group-name
  location            = var.location
  sku                 = "Basic"

  identity {
    type = "SystemAssigned"
  }
}

# Crea el Environment para las container-apps
resource "azurerm_container_app_environment" "container_env" {
  name                       = var.container_app_environment_name
  location                   = var.location
  resource_group_name        = var.resource-group-name
  log_analytics_workspace_id = var.log-analytics-ID
}

# Conexión dapr para base de datos
resource "azurerm_container_app_environment_dapr_component" "dapr" {
  component_type               = var.dapr_component_type
  container_app_environment_id = azurerm_container_app_environment.container_env.id
  name                         = var.dapr_component_name
  version = "v1"
}

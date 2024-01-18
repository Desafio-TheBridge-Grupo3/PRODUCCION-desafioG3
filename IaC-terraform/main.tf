terraform {
  cloud {
    organization = "Several-energy"
    workspaces {
      name = "several-energy-prod"
    }
  }
}

provider "azurerm" {
  subscription_id = local.subscription_id
  features {    
    resource_group {
      prevent_deletion_if_contains_resources = true
    }
  }
}

# Grupo de recursos
resource azurerm_resource_group Resource-Group {
  name = local.resource_group
  location = local.location
}

# Base de datos
# resource "azurerm_postgresql_flexible_server" "pg-flex-server" {
#   name                   = local.DB_server_name
#   resource_group_name    = "RECURSOS-desafiotripulacionesG3"
#   location               = local.location
#   administrator_login    = local.DB_user
#   administrator_password = local.DB_PWD
#   storage_mb             = 32768
#   sku_name               = "B2s"
  
#   lifecycle {
#     prevent_destroy = true
#   }
# }

# Crea elementos de monitorización
module "monitoriza" {
  source = "./Modules/Monitoring"
  resource-group-name = local.resource_group
  log_analytics_workspace_name = local.log_analytics_workspace_name
  location = local.location
}

# Creación del entorno para Container Apps
module "container_app_environment" {
  source = "./Modules/Container-apps-environment"
  location = local.location
  resource-group-name = local.resource_group
  container_registry_name = local.container_registry_name
  container_app_environment_name = local.container_app_environment_name_dev
  dapr_component_type = local.dapr_component_type
  dapr_component_name = local.dapr_component_name
  log-analytics-ID = module.monitoriza.log-analytics-ID
}

# Creación de la API candela
module "Container_app_candela" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource_group
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.API_candela
  identity_name = "${local.organization_name}-candela-id"
  depends_on = [ module.container_app_environment ]
}

# Creación de la API invoice
module "Container_app_invoice" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource_group
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.API_invoice
  identity_name = "${local.organization_name}-invoice-id"
  depends_on = [ module.container_app_environment ]
}

# Creación de la API server
module "Container_app_server" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource_group
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.server
  identity_name = "${local.organization_name}-server-id"
  depends_on = [ module.container_app_environment ]
}

# Creación de client
module "Container_app_client" {
  source = "./Modules/Container-apps"
  location = local.location
  resource-group-name = local.resource_group
  container_app_environment_id = module.container_app_environment.container_app_environment_id
  dapr_app_id = module.container_app_environment.dapr_app_id
  container_app = local.client
  identity_name = "${local.organization_name}-client-id"
  depends_on = [ module.container_app_environment, module.Container_app_candela, module.Container_app_invoice, module.Container_app_server ]
}

# Consultamos la ID de la API candela
data "azurerm_container_app" "data_candela" {
  name = "candela"
  resource_group_name = local.resource_group
  depends_on = [ module.Container_app_candela ]
}

# Asignamos el permiso a la API candela
resource "azurerm_role_assignment" "rol_candela" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource_group}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_candela.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_candela ]
}


# Consultamos la ID de la API invoice
data "azurerm_container_app" "data_invoice" {
  name = "invoice"
  resource_group_name = local.resource_group
  depends_on = [ module.Container_app_invoice ]
}

# Asignamos el permiso a la API invoice
resource "azurerm_role_assignment" "rol_invoice" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource_group}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_invoice.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_invoice ]
}


# Consultamos la ID de server
data "azurerm_container_app" "data_server" {
  name = "server"
  resource_group_name = local.resource_group
  depends_on = [ module.Container_app_server ]
}

# Asignamos el permiso a server
resource "azurerm_role_assignment" "rol_server" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource_group}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_server.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_server ]
}


# Consultamos la ID de client
data "azurerm_container_app" "data_client" {
  name = "client"
  resource_group_name = local.resource_group
  depends_on = [ module.Container_app_client ]
}

# Asignamos el permiso a client
resource "azurerm_role_assignment" "rol_client" {
  scope                = "/subscriptions/8981aa87-5078-479f-802f-cf78ed73bdf0/resourceGroups/${local.resource_group}"
  role_definition_name = "ArcPull"
  principal_id         = data.azurerm_container_app.data_client.identity[0].principal_id
  depends_on = [ data.azurerm_container_app.data_client ]
}
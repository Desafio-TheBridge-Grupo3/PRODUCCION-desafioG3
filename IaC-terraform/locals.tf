locals { # Variables generales del proyecto
    organization_name = "several-energy"
    STAGE = "prod"
    subscription_id = "8981aa87-5078-479f-802f-cf78ed73bdf0"
    location = "westeurope"
    resource_group = "${local.organization_name}-${local.STAGE}"
}

locals{ # Variables de la BDD
    DB_name        = "proyectoTribu"
    DB_server_name = "database-desafio-grupo3"
    DB_user        = var.PG-ADMIN-USER
    DB_PWD         = var.PG-ADMIN-PWD
}

locals { # Variables de monitorización
    log_analytics_workspace_name = "Log-analytics-${local.STAGE}"
}

locals { # Variables de configuración del entorno para container Apps
    container_registry_name = "severalacr${local.STAGE}"
    container_app_environment_name_dev = "env-container-apps-${local.STAGE}"
    dapr_component_type = "bindings.postgresql"
    dapr_component_name = "databaseconnect"
}

locals { # Variables para las API creadar por container apps
    API-1-name = "candela"

    API_candela = {container = {
      name = "${local.API-2-name}-${local.STAGE}"

      template = {
        min_replicas     = 1
        max_replicas     = 5
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "${local.API-1-name}"
        cpu              = 1
        memory_gigaBytes = 2

        env = [
              {name  = "URL_CANDELA"
              secret_name = "url-candela"},
              {name  = "USER_CANDELA"
              secret_name = "user-candela"},
              {name  = "PWD_CANELA"
              secret_name = "password-candela"}
        ]
      }

      http_scale_rule = {
        name                = "http-${local.API-1-name}"
        concurrent_requests = 5
      }

      ingress = {
        target_port                = 5000
        allow_insecure_connections = true
        external_enabled           = true
      }

      secret = [
        {name = "url-candela"
        sec-value = "https://agentes.candelaenergia.es/#/login"},
        {name = "user-candela"                                      # Almacenado como terraform cloud variable
        sec-value = var.USER_CANDELA},
        {name = "password-candela"                                  # Almacenado como terraform cloud secret
        sec-value = var.PWD_CANDELA}
      ]
    }
  }
}

locals { # Variables para las API creadar por container apps
    API-2-name = "invoice"

    API_invoice = {container = {
      name = "${local.API-2-name}-${local.STAGE}"

      template = {
        min_replicas     = 1
        max_replicas     = 5
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "${local.API-2-name}"
        cpu              = 1
        memory_gigaBytes = 2

        env = []
      }

      http_scale_rule = {
        name                = "http-${local.API-2-name}"
        concurrent_requests = 5
      }

      ingress = {
        target_port                = 5001
        allow_insecure_connections = true
        external_enabled           = true
      }

      secret = []
    }
  }
}

locals { # Variables para las API creadar por container apps
    API-3-name = "server"

    server = {container = {
      name = "${local.API-2-name}-${local.STAGE}"

      template = {
        min_replicas     = 1
        max_replicas     = 5
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "${local.API-3-name}"
        cpu              = 1
        memory_gigaBytes = 2

        env = [
              {name  = "SQL_USER"
              secret_name = "sqluser"},
              {name  = "SQL_PWD"
              secret_name = "sqlpwd"},
              {name  = "SQL_HOST"
              secret_name = "sqlhost"},
              {name  = "SQL_DATABASE"
              secret_name = "sqldatabase"},
              {name  = "JWT_SECRET"
              secret_name = "jwtsecret"},
              {name  = "SESSION_SECRET"
              secret_name = "sessionsecret"}
              ]
      }

      http_scale_rule = {
        name                = "http-${local.API-3-name}"
        concurrent_requests = 20
      }

      ingress = {
        target_port                = 3000
        allow_insecure_connections = true
        external_enabled           = true
      }

      secret = [
        {name = "sqluser"                  # Almacenado como terraform secret
        sec-value = var.PG-ADMIN-USER},
        {name = "sqlpwd"                   # Almacenado como terraform secret
        sec-value = var.PG-ADMIN-PWD},
        {name = "sqlhost"                  # Proporcionado por output
        sec-value = "database-desafio-grupo3.postgres.database.azure.com"},
        {name = "sqldatabase"
        sec-value = "proyectoTribu"},
        {name = "jwtsecret"                # Almacenado como terraform secret
        sec-value = var.JWT_SECRET},
        {name = "sessionsecret"            # Almacenado como terraform secret
        sec-value = var.SESSION_SECRET}
        ]
    }
  }
}

locals { # Variables para las API creadar por container apps
    API-4-name = "client"

    client = {container = {
      name = "${local.API-4-name}-${local.STAGE}"

      template = {
        min_replicas     = 1
        max_replicas     = 5
        image            = "mcr.microsoft.com/azuredocs/aci-helloworld"
        name             = "${local.API-4-name}"
        cpu              = 2
        memory_gigaBytes = 4

        env = [
              {name  = "VITE_SERVER_URL"
              secret_name = "viteserver"},
              {name  = "VITE_CANDELA"
              secret_name = "vitecandela"},
              {name  = "VITE_INVOICE"
              secret_name = "viteinvoice"}
        ]
      }

      http_scale_rule = {
        name                = "http-${local.API-4-name}"
        concurrent_requests = 40
      }

      ingress = {
        target_port                = 5173
        allow_insecure_connections = true
        external_enabled           = true
      }

      secret = [
        {name = "viteserver"
        sec-value = module.Container_app_candela.url[0]},
        {name = "vitecandela"
        sec-value = module.Container_app_invoice.url[0]},
        {name = "viteinvoice"
        sec-value = module.Container_app_server.url[0]}
      ]
    }
  }
}
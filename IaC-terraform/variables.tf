variable "ARM_CLIENT_ID" {
  description = "Variable para service-principal en terraform cloud"
  type = string
}

variable "ARM_CLIENT_SECRET" {
  description = "Variable para service-principal encriptada en terraform cloud"
  type = string
}

variable "ARM_TENANT_ID" {
  description = "Variable para service-principal en terraform cloud"
  type = string
}

variable "PG-ADMIN-USER" {
  description = "Usuario con permisos admin de la base de datos"
  type = string
}

variable "PG-ADMIN-PWD" {
  description = "Contraseña del usuario admin de la base de datos"
  type = string
}

variable "SESSION_SECRET" {
  type = string
}

variable "JWT_SECRET" {
  type = string 
}

variable "USER_CANDELA" {
  type = string
}

variable "PWD_CANDELA" {
  type = string
}
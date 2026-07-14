-- ============================================================================
--  Golden Cat — Esquema relacional (MySQL 8+)
-- ----------------------------------------------------------------------------
--  Script de creación de tablas y relaciones para el sistema de gestión
--  hotelera Golden Cat.
--
--  NOTA: Al arrancar el backend con Sequelize (npm run setup) el esquema y los
--  datos de ejemplo se crean automáticamente. Este script documenta el diseño
--  relacional normalizado y permite aprovisionar MySQL de forma manual.
--
--  Convenciones:
--    * Cada tabla tiene una clave primaria numérica (id) y un identificador
--      público (uuid) usado por la API.
--    * Codificación utf8mb4 (soporta acentos y emojis).
--    * Integridad referencial mediante claves foráneas.
-- ============================================================================

CREATE DATABASE IF NOT EXISTS golden_cat
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE golden_cat;

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
--  Localización: país → departamento → ciudad
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS country (
  id         BIGINT       NOT NULL AUTO_INCREMENT,
  uuid       CHAR(36)     NOT NULL,
  name       VARCHAR(120) NOT NULL,
  code       VARCHAR(10)  NOT NULL,
  createdAt  DATETIME     NOT NULL,
  updatedAt  DATETIME     NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_country_uuid (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS departments (
  id         BIGINT       NOT NULL AUTO_INCREMENT,
  uuid       CHAR(36)     NOT NULL,
  code       VARCHAR(36)  NOT NULL,
  name       VARCHAR(120) NOT NULL,
  countryId  BIGINT       NULL,
  createdAt  DATETIME     NOT NULL,
  updatedAt  DATETIME     NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_departments_uuid (uuid),
  KEY idx_departments_country (countryId),
  CONSTRAINT fk_departments_country
    FOREIGN KEY (countryId) REFERENCES country (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS city (
  id            BIGINT       NOT NULL AUTO_INCREMENT,
  uuid          CHAR(36)     NOT NULL,
  code          VARCHAR(36)  NOT NULL,
  name          VARCHAR(120) NOT NULL,
  departmentId  BIGINT       NULL,
  createdAt     DATETIME     NOT NULL,
  updatedAt     DATETIME     NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_city_uuid (uuid),
  KEY idx_city_department (departmentId),
  CONSTRAINT fk_city_department
    FOREIGN KEY (departmentId) REFERENCES departments (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Usuarios (clientes y administradores)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user (
  id              BIGINT        NOT NULL AUTO_INCREMENT,
  uuid            CHAR(36)      NOT NULL,
  typeUser        ENUM('administrador','cliente') NOT NULL DEFAULT 'cliente',
  name            VARCHAR(120)  NOT NULL,
  lastName        VARCHAR(120)  NOT NULL,
  email           VARCHAR(180)  NOT NULL,
  phone           VARCHAR(40)   NOT NULL,
  identification  VARCHAR(40)   NOT NULL,
  password        VARCHAR(255)  NOT NULL,   -- hash bcrypt
  images          JSON          NULL,
  countryId       BIGINT        NULL,
  createdAt       DATETIME      NOT NULL,
  updatedAt       DATETIME      NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_user_uuid (uuid),
  UNIQUE KEY uq_user_email (email),
  KEY idx_user_country (countryId),
  CONSTRAINT fk_user_country
    FOREIGN KEY (countryId) REFERENCES country (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Habitaciones y tipos de habitación
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS type_room (
  id         BIGINT   NOT NULL AUTO_INCREMENT,
  uuid       CHAR(36) NOT NULL,
  name       ENUM('individual','doble','suite','matrimonial') NOT NULL,
  createdAt  DATETIME NOT NULL,
  updatedAt  DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_type_room_uuid (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS room (
  id                      BIGINT   NOT NULL AUTO_INCREMENT,
  uuid                    CHAR(36) NOT NULL,
  state                   ENUM('Disponible','Mantenimiento') NOT NULL DEFAULT 'Disponible',
  code                    VARCHAR(20) NOT NULL,
  number_max              INT      NOT NULL,
  number_max_precio_base  INT      NOT NULL,
  value_base              INT      NOT NULL,
  value_persona           INT      NOT NULL,
  images                  JSON     NULL,
  typeRoomId              BIGINT   NULL,
  createdAt               DATETIME NOT NULL,
  updatedAt               DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_room_uuid (uuid),
  UNIQUE KEY uq_room_code (code),
  KEY idx_room_type (typeRoomId),
  CONSTRAINT fk_room_type_room
    FOREIGN KEY (typeRoomId) REFERENCES type_room (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Temporadas, fechas y tarifas
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS season (
  id          BIGINT   NOT NULL AUTO_INCREMENT,
  uuid        CHAR(36) NOT NULL,
  type        ENUM('alta','baja') NOT NULL,
  percentage  FLOAT    NOT NULL,
  variation   ENUM('Incrementa','Decrementa') NOT NULL,
  createdAt   DATETIME NOT NULL,
  updatedAt   DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_season_uuid (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS season_date (
  id            BIGINT   NOT NULL AUTO_INCREMENT,
  uuid          CHAR(36) NOT NULL,
  date_arrival  DATETIME NOT NULL,
  date_exit     DATETIME NOT NULL,
  seasonId      BIGINT   NULL,
  createdAt     DATETIME NOT NULL,
  updatedAt     DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_season_date_uuid (uuid),
  KEY idx_season_date_season (seasonId),
  CONSTRAINT fk_season_date_season
    FOREIGN KEY (seasonId) REFERENCES season (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS rate (
  id             BIGINT   NOT NULL AUTO_INCREMENT,
  uuid           CHAR(36) NOT NULL,
  value_persona  INT      NOT NULL,
  seasonId       BIGINT   NULL,
  roomId         BIGINT   NULL,
  createdAt      DATETIME NOT NULL,
  updatedAt      DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_rate_uuid (uuid),
  KEY idx_rate_season (seasonId),
  KEY idx_rate_room (roomId),
  CONSTRAINT fk_rate_season
    FOREIGN KEY (seasonId) REFERENCES season (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_rate_room
    FOREIGN KEY (roomId) REFERENCES room (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Reservas y su detalle
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS reservation (
  id               BIGINT   NOT NULL AUTO_INCREMENT,
  uuid             CHAR(36) NOT NULL,
  id_type_room     CHAR(36) NOT NULL,
  number_personas  FLOAT    NOT NULL,
  date_arrival     DATETIME NOT NULL,
  date_exit        DATETIME NOT NULL,
  state            ENUM('Activa','En curso','Cancelada','Finalizada') NOT NULL,
  roomId           BIGINT   NULL,
  createdAt        DATETIME NOT NULL,
  updatedAt        DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_reservation_uuid (uuid),
  KEY idx_reservation_room (roomId),
  CONSTRAINT fk_reservation_room
    FOREIGN KEY (roomId) REFERENCES room (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS detail_reservation (
  id               BIGINT   NOT NULL AUTO_INCREMENT,
  uuid             CHAR(36) NOT NULL,
  number_personas  INT      NOT NULL,
  value_persona    INT      NOT NULL,
  reservationId    BIGINT   NULL,
  createdAt        DATETIME NOT NULL,
  updatedAt        DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_detail_reservation_uuid (uuid),
  KEY idx_detail_reservation_reservation (reservationId),
  CONSTRAINT fk_detail_reservation_reservation
    FOREIGN KEY (reservationId) REFERENCES reservation (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Servicios del hotel
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS services (
  id           BIGINT   NOT NULL AUTO_INCREMENT,
  uuid         CHAR(36) NOT NULL,
  name         VARCHAR(120) NOT NULL,
  description  TEXT     NOT NULL,
  pressure     VARCHAR(120) NOT NULL,
  createdAt    DATETIME NOT NULL,
  updatedAt    DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_services_uuid (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Facturación
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS invoice (
  id             BIGINT   NOT NULL AUTO_INCREMENT,
  uuid           CHAR(36) NOT NULL,
  total_value    INT      NOT NULL,
  userId         BIGINT   NULL,
  reservationId  BIGINT   NULL,
  createdAt      DATETIME NOT NULL,
  updatedAt      DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_invoice_uuid (uuid),
  KEY idx_invoice_user (userId),
  KEY idx_invoice_reservation (reservationId),
  CONSTRAINT fk_invoice_user
    FOREIGN KEY (userId) REFERENCES user (id)
    ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT fk_invoice_reservation
    FOREIGN KEY (reservationId) REFERENCES reservation (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS invoice_detail (
  id          BIGINT   NOT NULL AUTO_INCREMENT,
  uuid        CHAR(36) NOT NULL,
  value       INT      NOT NULL,
  invoiceId   BIGINT   NULL,
  serviceId   BIGINT   NULL,
  createdAt   DATETIME NOT NULL,
  updatedAt   DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_invoice_detail_uuid (uuid),
  KEY idx_invoice_detail_invoice (invoiceId),
  KEY idx_invoice_detail_service (serviceId),
  CONSTRAINT fk_invoice_detail_invoice
    FOREIGN KEY (invoiceId) REFERENCES invoice (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_invoice_detail_service
    FOREIGN KEY (serviceId) REFERENCES services (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------------------------
--  Imágenes subidas (reemplazo de Firebase Storage)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS image (
  id            BIGINT       NOT NULL AUTO_INCREMENT,
  uuid          CHAR(36)     NOT NULL,
  filename      VARCHAR(255) NOT NULL,
  originalName  VARCHAR(255) NULL,
  mimeType      VARCHAR(100) NULL,
  size          INT          NULL,
  url           VARCHAR(500) NOT NULL,
  entityType    VARCHAR(50)  NULL,   -- 'user' | 'room' | ...
  entityId      CHAR(36)     NULL,
  createdAt     DATETIME     NOT NULL,
  updatedAt     DATETIME     NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_image_uuid (uuid),
  KEY idx_image_entity (entityType, entityId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================================
--  Fin del esquema
-- ============================================================================

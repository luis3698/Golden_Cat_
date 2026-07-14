'use strict'

// Carga variables de entorno desde backend/.env (si existe)
require('dotenv').config()

const path = require('path')
const pkg = require('../package.json')

const ROOT = path.join(__dirname, '..')

// Dialecto de base de datos: 'sqlite' (por defecto, cero configuración) o 'mysql'
const dialect = process.env.DB_DIALECT || 'sqlite'

const shared = {
  logging: process.env.DB_LOGGING === 'true' ? console.log : false,
  define: {
    // created_at / updated_at en snake_case y nombres de tabla en singular
    underscored: false,
    freezeTableName: true
  },
  pool: {
    max: Number(process.env.DB_POOL_MAX) || 5,
    min: Number(process.env.DB_POOL_MIN) || 0,
    acquire: 30000,
    idle: 10000
  }
}

let db

if (dialect === 'sqlite') {
  db = Object.assign({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || path.join(ROOT, 'data', 'golden-cat.sqlite')
  }, shared)
} else {
  db = Object.assign({
    dialect,
    database: process.env.DB_NAME || 'golden_cat',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 3306
  }, shared)
}

const config = {
  pkg,
  db,
  port: Number(process.env.PORT) || 8000,
  // Carpeta física donde se guardan las imágenes subidas
  uploadDir: process.env.UPLOAD_DIR || path.join(ROOT, 'uploads'),
  // URL pública base del backend (para construir las URLs de las imágenes)
  publicUrl: process.env.PUBLIC_URL || `http://localhost:${Number(process.env.PORT) || 8000}`
}

module.exports = config

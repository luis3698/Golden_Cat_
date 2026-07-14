'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const { getLogger } = require('@golden-cat/utils')

const log = getLogger(__dirname, __filename)
let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    // Para SQLite, aseguramos que el directorio del archivo exista
    if (config.dialect === 'sqlite' && config.storage && config.storage !== ':memory:') {
      const dir = path.dirname(config.storage)
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    }
    sequelize = new Sequelize(config)
    log.info(`conexión inicializada con la base de datos (${config.dialect})`)
  }

  return sequelize
}

'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

// Registro en SQL de cada imagen subida al servidor.
// El archivo físico vive en /uploads y aquí guardamos sus metadatos + URL pública.
module.exports = function setupImageModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('image', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false
    },
    originalName: {
      type: Sequelize.STRING
    },
    mimeType: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.INTEGER
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Entidad opcional a la que pertenece la imagen (ej. 'user', 'room')
    entityType: {
      type: Sequelize.STRING
    },
    entityId: {
      type: Sequelize.CHAR(36)
    }
  })
}

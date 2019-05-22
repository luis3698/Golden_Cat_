'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('room', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    state: {
      type: Sequelize.ENUM('Disponible','Mantenimiento'),
      allowNull: false,
      defaultValue: 'Disponible'
    },
    code: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    number_adult: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    number_children: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    value_adult: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    value_children: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    images: {
      type: Sequelize.JSON
    }
  })
}

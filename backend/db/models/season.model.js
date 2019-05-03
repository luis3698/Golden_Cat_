'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('season', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    type: {
      type: Sequelize.ENUM('alta','baja'),
      allowNull: false
    },
    percentage: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    variation: {
      type: Sequelize.CHAR(36),
      allowNull: false
    }
  })
}

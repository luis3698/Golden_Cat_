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
    type:{
      type: Sequelize.CHAR(36),
      allowNull: false
    },
    percentage: {
      type: Sequelize.CHAR(36),
      allowNull: false
    },
    variation:{
      type: Sequelize.CHAR(36),
      allowNull: false
    }
  })
}
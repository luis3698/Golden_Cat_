'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('departments', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    code: {
      type: Sequelize.CHAR(36),
      allowNull: false
    },
    name: {
      type: Sequelize.CHAR(36),
      allowNull: false
      
    }
  })
}

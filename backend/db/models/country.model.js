'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('country', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type:Sequelize.TEXT,
      allowNull: false
    },
    code: {
      type:Sequelize.TEXT,
      allowNull: false
    }
  })
  
}

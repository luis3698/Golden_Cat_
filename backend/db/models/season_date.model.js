'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('season_date', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },

    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })
}

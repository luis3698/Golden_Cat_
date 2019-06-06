'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('detail_reservation', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    number_personas: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    value_persona: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
}

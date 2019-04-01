'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('rate', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    room: {
      type:Sequelize.TEXT,
      allowNull: false
    },
    season: {
      type:Sequelize.TEXT,
      allowNull: false
    },
    value_adult: {
      type:Sequelize.INTEGER,
      allowNull: false
    },
    value_children: {
      type:Sequelize.INTEGER,
      allowNull: false
    }
})
}
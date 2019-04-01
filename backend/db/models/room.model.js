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
    name: {
      type:Sequelize.TEXT,
      allowNull: false
    },
    type: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    state_activeinactiva: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    namber_adult: {
      type: Sequelize.TEXT,
      allowNull: false
     },
    namber_children: {
      type: Sequelize.TEXT,
      allowNull: false
     },
    value_adult: {
      type:Sequelize.INTEGER,
      allowNull: false
     },
     value_children: {
      type:Sequelize.INTEGER,
      allowNull: false
     },
     service_room: {
      type:Sequelize.TEXT,
      allowNull: false
     }
  })
}
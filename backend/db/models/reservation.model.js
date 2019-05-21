'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('reservation', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    id_type_room: {
      type: Sequelize.CHAR(36),
      allowNull: false
    },
    number_adult: {
      type: Sequelize.FLOAT(20),
      allowNull: false
    },
    number_children: {
      type: Sequelize.FLOAT(20) ,
      allowNull: false
    },
    date_arrival: {
      type: Sequelize.DATE,
      allowNull: false
    },
    date_exit: {
      type: Sequelize.DATE,
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM('Activa','En curso','Cancelada','Finalizada'),
      allowNull: false
    }
  })
}

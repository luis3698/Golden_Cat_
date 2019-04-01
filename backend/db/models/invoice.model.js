'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel(config) {
    const sequelize = setupDatabase(config)
    return sequelize.define('invoice', {
        uuid: {
            type: Sequelize.CHAR(36),
            defaultValue: Sequelize.UUIDV4
        },
        user: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        reservation: {
            type: Sequelize.TEXT,
            allowNull: false
        },
  total_value: {
             type: Sequelize.INTEGER,
             allowNull: false
         }
    })

}

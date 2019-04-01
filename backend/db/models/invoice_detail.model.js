'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel(config) {
    const sequelize = setupDatabase(config)
    return sequelize.define('invoice_detail', {
        uuid: {
            type: Sequelize.CHAR(36),
            defaultValue: Sequelize.UUIDV4
        },
  reservation_detail: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        invoice: {
            type: Sequelize.TEXT,
            allowNull: false
        },
      service: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        value: {
             type: Sequelize.TEXT,
             allowNull: false
         }
    })

}

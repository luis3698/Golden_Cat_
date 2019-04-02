'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel(config) {
    const sequelize = setupDatabase(config)
    return sequelize.define('services', {
        uuid: {
            type: Sequelize.CHAR(36),
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        pressure: {
            type: Sequelize.TEXT,
            allowNull: false
            }
        })

    }
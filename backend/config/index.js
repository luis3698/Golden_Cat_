'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || 'hfwtqhuzsps7dfzq',
    username: process.env.DB_USER || 'nnl8wzshlxzoo8s0',
    password: process.env.DB_PASS || 'jxqssjh1cmjelc5b',
    host: process.env.DB_HOST || 'ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  }
}

Object.assign(config, { pkg })

module.exports = config

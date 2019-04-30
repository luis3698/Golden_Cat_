const Sequelize = require('sequelize')
const { getLogger } = require('@golden-cat/utils')
const log = getLogger(__dirname, __filename)
let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    log.info('conexion establecida con la base de datos')
    sequelize = new Sequelize(config)
  }

  return sequelize
}

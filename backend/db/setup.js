'use strict'

// Crea el esquema de la base de datos y carga los datos de ejemplo.
// Uso:  npm run setup        (backend)
//
// ADVERTENCIA: se ejecuta con sync({ force: true }), lo que ELIMINA y recrea
// todas las tablas. Pensado para desarrollo / primer arranque.

const { getLogger } = require('@golden-cat/utils')
const dbs = require('./')
const seed = require('./seed')

const log = getLogger(__dirname, __filename)

async function setup () {
  const services = await dbs()
  log.info('Recreando el esquema de la base de datos...')
  await services.setup()
  log.info('Cargando datos de ejemplo...')
  const summary = await seed(services)
  console.log('✔ Base de datos lista:', JSON.stringify(summary))
  console.log('  Admin:   admin@goldencat.com / admin123')
  console.log('  Cliente: cliente@goldencat.com / cliente123')
  process.exit(0)
}

setup().catch((err) => {
  console.error('✖ Error configurando la base de datos:', err.message)
  process.exit(1)
})

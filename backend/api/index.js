'use strict'

const { getLogger } = require('@golden-cat/utils')
const user = require('./user')
const room = require('./room')
const type_room = require('./type_room')
const rate = require('./rate')
const season = require('./season')
const reservation = require('./reservation')

const log = getLogger(__dirname, __filename)
// prueba
module.exports = {
  home (req, res) {
    res.send({
      user: '/user',
    })
  },
   user,
   room,
   type_room,
   rate,
   season,
   reservation,

  errorHandler (err, req, res, next) {
    if (err) {
      let code = err.code || 500
      const { id } = req
      const { message, stack } = err
      log.debug({ id, message: stack })
      log.error({ id, message })
      res.status(code).send({ error: message })
      return
    }

    next()
  }

}

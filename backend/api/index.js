'use strict'

const { getLogger } = require('@golden-cat/utils')
const user = require('./user')
const room = require('./room')
const type_room = require('./type_room')
const rate = require('./rate')
const season = require('./season')
const reservation = require('./reservation')
const season_date = require('./season_date')
const invoice = require('./invoice')
const invoice_detail = require('./invoice_detail')
const services = require('./services.js')
const detail_reservation = require('./detail_reservation')




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
   season_date,
   invoice,
   invoice_detail,
   services,
   detail_reservation,


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

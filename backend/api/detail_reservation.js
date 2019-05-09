'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
    try {
    const {detail_reservationNew} = req.body
    const {Detail_Reservation} = await db()
    const result = await Detail_Reservation.createDetail_reservation(detail_reservationNew)
    res.send(result)
    } catch (err) {
     next(err)
    }
})
router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Detail_reservation } = await db()
    const result = await Detail_reservation.deleteDetail_reservationUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { detail_reservationUpdate } = req.body
    const { Detail_reservation } = await db()
    const result = await Detail_reservation.updateDetail_reservation(uuid, detail_reservationUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { Detail_reservation } = await db()
    const result = await Detail_reservation.findAllDetail_reservation()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
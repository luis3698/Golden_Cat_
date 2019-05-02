'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { rateNew } = req.body
    const { Rate } = await db()
    const result = await Rate.createRate(rateNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Rate } = await db()
    const result = await Rate.deleteRateUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { rateUpdate } = req.body
    const { Rate } = await db()
    const result = await Rate.updateRate(uuid, rateUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { Rate } = await db()
    const result = await Rate.findAllRate()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
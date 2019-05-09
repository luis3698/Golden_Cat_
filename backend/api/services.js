'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { servicesNew } = req.body
    const { Services } = await db()
    const result = await Services.createServices(servicesNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Services } = await db()
    const result = await Services.deleteServicesUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { servicesUpdate } = req.body
    const { Services } = await db()
    const result = await Services.updateRate(uuid, servicesUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { Services } = await db()
    const result = await Services.findAllServices()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
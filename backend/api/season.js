'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { seasonNew } = req.body
    const { Season } = await db()
    const result = await Season.createSeason(seasonNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Season } = await db()
    const result = await Season.deleteSeasonUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { seasonUpdate } = req.body
    const { Season } = await db()
    const result = await Season.updateSeason(uuid, seasonUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { Season } = await db()
    const result = await Season.findAllSeason()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
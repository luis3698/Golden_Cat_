'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { season_dateNew } = req.body
    const { Season_Date } = await db()
    const result = await Season_Date.createSeason_date(season_dateNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Season_date } = await db()
    const result = await Season_date.deleteSeason_dateUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { season_dateUpdate } = req.body
    const { Season_date } = await db()
    const result = await Season_date.updateSeason_date(uuid, season_dateUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Season_date } = await db()
    const result = await Season_date.findAllSeason_date(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
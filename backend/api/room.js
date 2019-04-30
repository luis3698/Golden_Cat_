'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { roomNew } = req.body
    const { Room } = await db()
    const result = await Room.createRoom(roomNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Room } = await db()
    const result = await Room.deleteRoomUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { roomUpdate } = req.body
    const { Room } = await db()
    const result = await Room.updateRoom(uuid, roomUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { Room } = await db()
    const result = await Room.findAllRoom()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
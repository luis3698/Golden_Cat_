'use strict'

const {Router} = require('express')
const {getLogger,cache} = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
    try {
    const {type_roomNew} = req.body
    const {Type_Room} = await db()
    const result = await Type_Room.createType_room(type_roomNew)
    res.send(result)
    } catch (err) {
     next(err)
    }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Type_Room } = await db()
    const result = await Type_Room.deleteType_roomUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const {type_roomUpdate } = req.body
    const { Type_Room } = await db()
    const result = await Type_Room.updateType_room(uuid, type_roomUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Type_Room } = await db()
    const result = await Type_Room.findAllType_room()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Type_Room } = await db()
    const result = await Type_Room.findUuidType_room(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router



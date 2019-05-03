'use strict'

function setupType_room(type_roomModel) {
  async function createType_room(type_roomNew) {
    const result = await type_roomModel.create(type_roomNew)
    return result.toJSON()
  }
  async function deleteType_roomUuid(uuid) {
    const cond = { where: { uuid } }
    const result = await type_roomModel.destroy(cond)
    return result ? true : false
  }
  async function updateType_room(uuid, type_room) {
  const cond = { where: { uuid } }
  const result = await type_roomModel.update(type_room, cond)
  return result ? type_roomModel.findOne(cond) : new Error('no se actualizo ningun tipo de habitación')
  }
  function findAllType_room() {
    return type_roomModel.findAll()
  }
async function findUuidType_room(uuid) {
    const cond = { where: { uuid } }
    const result = await type_roomModel.findOne(cond)
    return result
  }

  return {
    createType_room,
    deleteType_roomUuid,
    updateType_room,
    findAllType_room,
    findUuidType_room
  }

}

module.exports = setupType_room
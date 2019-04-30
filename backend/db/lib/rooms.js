'use strict'

function setupRoom(roomModel) {
  async function createRoom(roomNew) {
    const result = await roomModel.create(roomNew)
    return result.toJSON()
  }
  async function deleteRoomUuid (uuid) {
    const cond = { where: { uuid } }
    const result = await roomModel.destroy(cond)
    return result ? true : false
  }
  async function updateRoom(uuid, room) {
  const cond = { where: { uuid } }
  const result = await roomModel.update(room, cond)
  return result ? roomModel.findOne(cond) : new Error('no se actualizo ninguna habitación')
  }
  function findAllRoom() {
    return roomModel.findAll()
  }


  return {
    createRoom,
    deleteRoomUuid,
    updateRoom,
    findAllRoom
  }

}

module.exports = setupRoom
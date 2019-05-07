'use strict'

function setupReservation(reservationModel) {
  async function createReservation(reservationNew) {
    const result = await reservationModel.create(reservationNew)
    return result.toJSON()
  }
  async function deleteReservationUuid (uuid) {
    const cond = { where: { uuid } }
    const result = await reservationModel.destroy(cond)
    return result ? true : false
  }
  async function updateReservation(uuid, reservation) {
  const cond = { where: { uuid } }
  const result = await reservationModel.update(reservation, cond)
  return result ? reservtionModel.findOne(cond) : new Error('No se actualizo ninguna reservacion')
  }
  function findAllReservation() {
    return reservationModel.findAll()
  }


  return {
    createReservation,
    deleteReservationUuid,
    updateReservation,
    findAllReservation
  }

}

module.exports = setupReservation
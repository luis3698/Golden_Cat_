'use strict'

function setupSeason(seasonModel) {
  async function createSeason(seasonNew) {
    const result = await seasonModel.create(seasonNew)
    return result.toJSON()
  }
  async function deleteSeasonUuid (uuid) {
    const cond = { where: { uuid } }
    const result = await seasonModel.destroy(cond)
    return result ? true : false
  }
  async function updateSeason(uuid, season) {
  const cond = { where: { uuid } }
  const result = await seasonModel.update(season, cond)
  return result ? seasonModel.findOne(cond) : new Error('no se actualizo ninguna temporada')
  }
  function findAllSeason() {
    return seasonModel.findAll()
  }


  return {
    createSeason,
    deleteSeasonUuid,
    updateSeason,
    findAllSeason
  }

}

module.exports = setupSeason
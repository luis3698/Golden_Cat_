'use strict'

function setupSeason_date(season_dateModel) {
  async function createSeason_date(season_dateNew) {
    const result = await season_dateModel.create(season_dateNew)
    return result.toJSON()
  }
  async function deleteSeason_dateUuid (uuid) {
    const cond = { where: { uuid } }
    const result = await season_dateModel.destroy(cond)
    return result ? true : false
  }
  async function updateSeason_date(uuid, season_date) {
  const cond = { where: { uuid } }
  const result = await season_dateModel.update(season_date, cond)
  return result ? season_dateModel.findOne(cond) : new Error('no se actualizo ninguna temporada')
  }
  function findAllSeason_date() {
    return season_dateModel.findAll()
  }
  async function findUuidSeason_date (uuid) {
    return season_dateModel.findOne({ where: { uuid } })
  }

  return {
    createSeason_date,
    deleteSeason_dateUuid,
    updateSeason_date,
    findAllSeason_date,
    findUuidSeason_date
  }

}

module.exports = setupSeason_date
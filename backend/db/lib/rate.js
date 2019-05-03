'use strict'

function setupRate(rateModel) {
    async function createRate(rateNew) {
      const result = await rateModel.create(rateNew)
      return result.toJSON()
    }

    async function deleteRateUuid (uuid) {
        const cond = { where: { uuid } }
        const result = await rateModel.destroy(cond)
        return result ? true : false
      }
      async function updateRate(uuid, rate) {
      const cond = { where: { uuid } }
      const result = await rateModel.update(rate, cond)
      return result ? rateModel.findOne(cond) : new Error('no se actualizo ninguna tarifa')
      }
      function findAllRate() {
        return rateModel.findAll()
      }
    
    
      return {
        createRate,
        deleteRateUuid,
        updateRate,
        findAllRate
      }
    
    }
    
    module.exports = setupRate
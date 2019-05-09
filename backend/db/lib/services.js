'use strict'

function setupServices(servicesModel) {
    async function createServices(servicesNew) {
      const result = await servicesModel.create(servicesNew)
      return result.toJSON()
    }

    async function deleteServicesUuid (uuid) {
        const cond = { where: { uuid } }
        const result = await servicesModel.destroy(cond)
        return result ? true : false
      }
      async function updateServices(uuid, services) {
      const cond = { where: { uuid } }
      const result = await servicesModel.update(services, cond)
      return result ? servicesModel.findOne(cond) : new Error('no se actualizo ninguna tarifa')
      }
      function findAllServices() {
        return rateModel.findAll()
      }
    
    
      return {
        createServices,
        deleteServicesUuid,
        updateServices,
        findAllServices
      }
    
    }
    
    module.exports = setupServices
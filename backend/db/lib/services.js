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
        return servicesModel.findAll()
      }
      async function findUuidServices (uuid) {
        return servicesModel.findOne({ where: { uuid } })
      }
    
    
      return {
        createServices,
        deleteServicesUuid,
        updateServices,
        findAllServices,
        findUuidServices
      }
    
    }
    
    module.exports = setupServices
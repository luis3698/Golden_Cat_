'use strict'

function setupInvoice(invoiceModel) {
    async function createInvoice(invoiceNew) {
      const result = await invoiceModel.create(invoiceNew)
      return result.toJSON()
    }

    async function deleteInvoiceUuid (uuid) {
        const cond = { where: { uuid } }
        const result = await invoiceModel.destroy(cond)
        return result ? true : false
      }
      async function updateInvoice(uuid, invoice) {
      const cond = { where: { uuid } }
      const result = await invoiceModel.update(invoice, cond)
      return result ? invoiceModel.findOne(cond) : new Error('no se actualizo ninguna tarifa')
      }
      function findAllInvoice() {
        return invoiceModel.findAll()
      }
    
    
      return {
        createInvoice,
        deleteInvoiceUuid,
        updateInvoice,
        findAllInvoice
      }
    
    }
    
    module.exports = setupInvoice
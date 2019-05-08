'use strict'

function setupInvoice_detail(invoice_detailModel) {
    async function createInvoiceDetail(invoice_detailNew) {
      const result = await invoice_detailModel.create(invoice_detailNew)
      return result.toJSON()
    }
    async function deleteInvoice_detailUuid (uuid) {
        const cond = { where: { uuid } }
        const result = await invoice_detailModel.destroy(cond)
        return result ? true : false
      }
      async function updateInvoice_detail(uuid, invoice_detail) {
      const cond = { where: { uuid } }
      const result = await invoice_detailModel.update(invoice_detail, cond)
      return result ? invoice_detailModel.findOne(cond) : new Error('no se actualizo ninguna tarifa')
      }
      function findAllInvoice_detail() {
        return invoice_detailModel.findAll()
      }
      
    async function findUuidInvoice_detail(uuid) {
    const cond = { where: { uuid } }
    const result = await invoice_detailModel.findOne(cond)
    return result
  }
    
      return {
        createInvoiceDetail,
        deleteInvoice_detailUuid,
        updateInvoice_detail,
        findAllInvoice_detail,
        findUuidInvoice_detail
      }
    
    }
    
    module.exports = setupInvoice_detail
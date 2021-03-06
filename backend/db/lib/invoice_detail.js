'use strict'

function setupInvoice_detail(invoice_detailModel) {
    async function createInvoiceDetail(invoice_detailNew) {
      const result = await invoice_detailModel.create(invoice_detailNew)
      return result.toJSON()
    }
    async function deleteInvoiceDetailUuid (uuid) {
        const cond = { where: { uuid } }
        const result = await invoice_detailModel.destroy(cond)
        return result ? true : false
      }
      async function updateInvoiceDetail(uuid, invoice_detail) {
      const cond = { where: { uuid } }
      const result = await invoice_detailModel.update(invoice_detail, cond)
      return result ? invoice_detailModel.findOne(cond) : new Error('no se actualizo ninguna tarifa')
      }
      function findAllInvoiceDetail() {
        return invoice_detailModel.findAll()
      }
      
    async function findUuidInvoiceDetail(uuid) {
    const cond = { where: { uuid } }
    const result = await invoice_detailModel.findOne(cond)
    return result
  }
    
      return {
        createInvoiceDetail,
        deleteInvoiceDetailUuid,
        updateInvoiceDetail,
        findAllInvoiceDetail,
        findUuidInvoiceDetail
      }
    
    }
    
    module.exports = setupInvoice_detail
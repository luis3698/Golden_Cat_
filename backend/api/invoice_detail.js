'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { invoiceDetailNew } = req.body
    const { InvoiceDetail } = await db()
    const result = await InvoiceDetail.createInvoiceDetail(invoiceDetailNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Invoice_detail } = await db()
    const result = await Invoice_detail.deleteInvoice_detailUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { invoice_detailUpdate } = req.body
    const { Invoice_detail } = await db()
    const result = await Invoice_detail.updateInvoice_detail(uuid, invoice_detailUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Invoice_detail} = await db()
    const result = await Invoice_detail.findAllInvoice_detail(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Invoice_detail} = await db()
    const result = await Invoice_detail.findUuidInvoice_detail(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})


module.exports = router
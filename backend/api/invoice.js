'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@golden-cat/utils')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req,res,next) {
  try {
    const { invoiceNew } = req.body
    const { Invoice } = await db()
    const result = await Invoice.createInvoice(invoiceNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req,res,next) {
  try {
    const { uuid } = req.params
    const { Invoice } = await db()
    const result = await Invoice.deleteInvoiceUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { invoiceUpdate } = req.body
    const { Invoice } = await db()
    const result = await Invoice.updateInvoice(uuid, invoiceUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    const { Invoice } = await db()
    const result = await Invoice.findAllInvoice()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
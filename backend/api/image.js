'use strict'

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { Router } = require('express')
const multer = require('multer')
const { getLogger } = require('@golden-cat/utils')
const config = require('@golden-cat/config')
const db = require('@golden-cat/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

// Aseguramos la carpeta de subidas
if (!fs.existsSync(config.uploadDir)) {
  fs.mkdirSync(config.uploadDir, { recursive: true })
}

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, config.uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg'
    const name = crypto.randomBytes(16).toString('hex') + ext
    cb(null, name)
  }
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (ALLOWED.includes(file.mimetype)) return cb(null, true)
    cb(new Error('Tipo de archivo no permitido. Usa JPG, PNG, WEBP o GIF.'))
  }
})

// POST /image  (campo del formulario: "image")
router.post('/', upload.single('image'), async function (req, res, next) {
  try {
    if (!req.file) {
      const err = new Error('No se recibió ninguna imagen')
      err.code = 400
      throw err
    }
    const { entityType, entityId } = req.body
    const url = `${config.publicUrl}/uploads/${req.file.filename}`
    const { Image } = await db()
    const image = await Image.createImage({
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      url,
      entityType: entityType || null,
      entityId: entityId || null
    })
    res.send(image)
  } catch (err) {
    next(err)
  }
})

// GET /image  -> lista todas las imágenes registradas
router.get('/', async function (req, res, next) {
  try {
    const { Image } = await db()
    const result = await Image.findAllImage()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

// DELETE /image/:uuid  -> borra registro SQL y archivo físico
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Image } = await db()
    const image = await Image.findUuidImage(uuid)
    if (image) {
      const filePath = path.join(config.uploadDir, image.filename)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
    const result = await Image.deleteImage(uuid)
    res.send({ deleted: result })
  } catch (err) {
    next(err)
  }
})

module.exports = router

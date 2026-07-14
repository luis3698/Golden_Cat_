'use strict'

function setupImage (imageModel) {
  async function createImage (image) {
    const result = await imageModel.create(image)
    return result.toJSON()
  }

  function findAllImage () {
    return imageModel.findAll()
  }

  function findByEntity (entityType, entityId) {
    return imageModel.findAll({ where: { entityType, entityId } })
  }

  async function findUuidImage (uuid) {
    return imageModel.findOne({ where: { uuid } })
  }

  async function deleteImage (uuid) {
    const result = await imageModel.destroy({ where: { uuid } })
    return !!result
  }

  return {
    createImage,
    findAllImage,
    findByEntity,
    findUuidImage,
    deleteImage
  }
}

module.exports = setupImage

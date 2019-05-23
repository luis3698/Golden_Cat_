'use strict'

const { password } = require('@golden-cat/utils')
function setupUser (userModel) {
  async function createUser(userNew) {
    userNew.password = password.generateHash(userNew.password)
    const result = await userModel.create(userNew)
    return result.toJSON()
  }
  async function deleteUser (uuid){
    const cond = { where: { uuid } }
    const result = await userModel.destroy(cond)
    
    return result ? true : false
  }
  async function updateUser(uuid, user) {
    const cond = { where: { uuid } }
    const result = await userModel.update(user, cond)
    return result ? userModel.findOne(cond) : new Error('no se actualizo ningun usuario')

  }
  function findAllUser(){
    return userModel.findAll()
  }
  async function findUuidUser(uuid) {
    const cond = { where: { uuid } }
    const result = await userModel.findOne(cond)
    return result
  }
  return {
    createUser,
    deleteUser,
    updateUser,
    findAllUser,
    findUuidUser
  }


}
module.exports = setupUser
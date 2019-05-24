'use strict'

const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

module.exports = {
    generateHash : (password) => bcrypt.hashSync(password, salt),
    compareHash: (plainPassword, hashPassword) => bcrypt.compareSync(plainPassword, hashPassword)
}
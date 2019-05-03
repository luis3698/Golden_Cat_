'use strict'

const http = require('http')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
<<<<<<< HEAD
const { errorHandler, home, user, room, type_room} = require('@golden-cat/api')
=======
const { errorHandler, home, user, room, rate, season} = require('@golden-cat/api')
>>>>>>> 80b8081093804d6f97b32b035f6ba1f883999b07
const { getLogger, logHandler, terminate } = require('@golden-cat/utils')

const app = express()
const server = http.createServer(app)
const log = getLogger(__dirname, __filename)
const port = +process.env.PORT || 8000

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logHandler)
app.use('/user', user)
app.use('/room', room)
<<<<<<< HEAD
app.use('/type_room', type_room)
=======
app.use('/rate',rate)
app.use('/season',season)
>>>>>>> 80b8081093804d6f97b32b035f6ba1f883999b07
app.get('/', home)
app.use(errorHandler)

module.exports = server

if (!module.parent) {
  server.listen(port, () => {
    log.info(`server listening on http://localhost:${port}`)
  })

  process.on('SIGINT', terminate(0, 'SIGINT'))
  process.on('SIGTERM', terminate(0, 'SIGTERM'))
  process.on('uncaughtException', terminate(1, 'uncaughtException'))
  process.on('unhandledRejection', terminate(1, 'unhandledRejection'))
}

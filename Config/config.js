const express = require('express')
const cors = require('cors')

module.exports.setUpServer = () => {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(require('../Controllers'))

  return app
}
// usuario l de cada loja -  loja de fruta - frutas
// usuario c -  crud de compra

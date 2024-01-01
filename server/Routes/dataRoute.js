const express = require('express')
const { GetData } = require('../controller/GetData')

const app = express()

const Router = express.Router()

Router.get('/data',GetData)

module.exports = Router
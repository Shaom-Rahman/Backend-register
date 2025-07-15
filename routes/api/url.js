const express = require('express')
const getUrl = require('../../controller/getURl')
const urlRoute = express.Router()

urlRoute.post('/getLongUrl' , getUrl)

module.exports = urlRoute


 
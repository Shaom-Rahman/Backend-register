const express = require('express')
const registerController = require('../../controller/register')
const loginController = require('../../controller/login')
const authRoute = express.Router()


authRoute.post('/register', registerController)
authRoute.post('/login' , loginController)

module.exports = authRoute

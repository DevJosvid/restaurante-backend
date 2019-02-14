const authController = require('../controller/auth');
const express =require('express')
const api= express.Router()

api.post('/login', authController.Signin);

module.exports = api;
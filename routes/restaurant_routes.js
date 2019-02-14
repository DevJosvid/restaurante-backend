const rest_controller = require('../controller/restaurant_controller');
const express = require('express');
const api = express.Router();
const middle = require('../middlewares/midd');

api.get('/find-rest', rest_controller.findrestaurant);
api.get('/find-byrest/:id?',rest_controller.findbyrestaurant);
api.post('/create-restaurant',rest_controller.createrestaurant);
api.post('/update-rest/:id?',rest_controller.updaterestaurant);
api.post('/delte-rest/:id?',rest_controller.deleterestaurant);

module.exports = api;
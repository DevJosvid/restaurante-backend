const clientcontroller = require('../controller/client_controller')
const middle = require('../middlewares/midd');
const express =require('express')
const api= express.Router()

api.get('/find-client',clientcontroller.findclient);
api.get('/find-idclient/:id?',clientcontroller.findbyclient);
api.post('/create-client',clientcontroller.createclient);
api.post('/update-client/:id?',clientcontroller.updateclient);
api.post('/delete-client/:id?',clientcontroller.deleteclient);
api.get('/private', middle.isAuth,  (req, res) => {
    res.status(200).send({ message: 'Acceso Concedido' });
})

module.exports = api;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarios = schema({
    nombre: String,
    apellido: String,
    identificacion: Number,
    telefono: Number,
    email: String,
    password: String
});

module.exports = mongoose.model('clientes', usuarios);
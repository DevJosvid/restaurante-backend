
const mongoose= require('mongoose')
const schema = mongoose.Schema;

const restaurante = schema({
    nombre: String,
    direccion:String,
    telefono: String,
    descripcion:String

})

module.exports = mongoose.model('restaurantes', restaurante);
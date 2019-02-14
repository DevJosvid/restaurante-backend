const rest_model = require('../model/restaurant_model');

function findrestaurant (req,res){
    rest_model.find({}, function (err,datos){
        if(!err){
            res.status(200).send({ data: datos})
        }else{
            res.status(500).send({message:'no se encontraron restaurantes'})
        }
    })
}

function findbyrestaurant(req,res){
    rest_model.findById(req.query.id , function(err,datos){
        if(!err){
            res.status(200).send({datos});
        }else{
            res.status(500).send({message:'no se encontro el restaurante especificado'})
        }
    })
}

function createrestaurant (req,res){
    const rest = new rest_model({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        descripcion: req.body.descripcion
    })
    rest.save(function(err){
        if(!err){
            res.status(200).send({message:'restaurante creado exitosamente'});
        }else{
            res.status(500).send({message:'error al crear restaurante'});
        }
    })
}

function updaterestaurant(req,res){
    rest_model.findByIdAndUpdate(req.query.id, req.body, function(err,datos){
        if(!err){
            res.status(200).send({message:'datos actualizados'});
        }else{
            res.status(500).send({message:'error al actualizar'});
        }
    })
}

function deleterestaurant (req,res){
    rest_model.findByIdAndRemove(req.query.id, function(err,datos){
        if(!err){
            res.status(200).send({message:'restaurante eliminado'});
        }else{
            res.status(500).send({message:'error al eliminar restaurante'})
        }
    })
}

module.exports = {
    findrestaurant,
    findbyrestaurant,
    createrestaurant,
    updaterestaurant,
    deleterestaurant
}
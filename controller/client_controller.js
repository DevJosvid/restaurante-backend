const clientModel = require('../model/client_model')
const mongoose = require('mongoose')
const service = require('../service/service');


function findclient(req, res) {
    clientModel.find({}, function (err, datos) {
        if (!err) {
            res.status(200).send( {data: datos});
        } else {
            res.status(500).send('error ' + err);
        }
    })
}

function findbyclient(req,res){
    clientModel.findById(req.query.id,function (err,datos){
        if(!err){
            res.status(200).send(datos);
        }else{
            res.status(500).send({message:'no se encontro el ususario'})
        }
    });
}

function createclient (req,res){
    const create = new clientModel({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    identificacion: req.body.identificacion,
    telefono: req.body.telefono,
    email: req.body.email,
    password: req.body.password
    })
    create.save(function(err){
        if(!err){
            res.status(200).send({ status: true, message:'registro completo'})
        }else{
            res.status(500).send({ status: false, message:'error al registrarse'})
        }
    })
}
function updateclient (req,res){
    clientModel.findByIdAndUpdate(req.querys.id, req.body,function(err,datos){
        if(!err){
            res.status(200).send({message:'actualizacion completa completo'})
        }else{
            res.status(500).send({message:'error al actualizar datos'})
        }
    
    });
}

function deleteclient(req,res){
    clientModel.findByIdAndRemove(req.querys.id,function(err,datos){
        if(!err){
            res.status(200).send({message:'cliente eliminado'})
        }else{
            res.status(500).send({message:'error al eliminar cliente'})
        }
    })
}

SignIn = (req, res) => {
    ClientModel.find({ email: req.body.email }, (err, datos) => {
        if (err) {
            res.status(200).send({ message: "Error al buscar email" });
        } else {
            if (datos.length > 0) {
                ClientModel.find({ password: req.body.password }, (erro, datos2) => {
                    if (erro) {
                        res.status(200).send({ message: "Error al buscar la contrasena" });
                    } else if (datos2.length > 0) {
                        
                        res.status(200).send({
                            message: 'logeado correctamente',
                            token: service.createtoken(datos[0]._id)
                        });
                    } else {
                        res.status(200).send("Cotrasena incorrecta");

                    }
                });
            } else {
                res.status(200).send("El Usuario no Existe");
            }
        }
    })
}
module.exports={
    findclient,
    findbyclient,
    createclient,
    updateclient,
    deleteclient,
    SignIn
}


    

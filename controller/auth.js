const cliente = require('../model/client_model');
const service = require('../service/service');

function Singup(req, res) {
    const user = new cliente({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email
    })
    user.save((err) => {
        if (err) {
            res.status(200).send('error en el momento de ingresar');
        } else {
            res.status(200).send({ token: service.createtoken(user) })
        }
    })
}

function Signin(req, res) {
    cliente.find({ email: req.body.email }, function (err, client) {
        if (err) {
            res.status(200).send({ status: false, message: 'acceso denegado' })
        }
        if (client.length == 0) {
            res.status(200).send({ status: false, message: 'usuario no existe' })
        } else {
            cliente.find({ password: req.body.password }, function (error, pass) {
                if (error) {
                    res.status(200).send({ status: false, message: 'acceso denegado' });
                }
                if (pass.length == 0) {
                    res.status(200).send({ status: false, message: 'contraseña incorrecta' })
                } else {
                    res.status(200).send({
                        data: client[0],
                        token: service.createtoken(client._id),
                        status: true
                    });
                }
            });
        }
    })
}

module.exports = {
    Signin,
    Singup
}

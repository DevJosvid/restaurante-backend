const jwt = require('jsonwebtoken');
const moment = require('moment');
const service = require('../service/service');
const secret = '1234'

exports.isAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'Acceso denegado' });
    }
    const token = req.headers.authorization.split(" ")[1];
    const segments = token.split('.');
    if (segments.length !== 3) {
        return res.status(200).send({ status: false, message: 'El token no es valido' });
    }
    const payload = jwt.decode(token, service.secret)
    if (payload.secret != secret){
        return res.status(200).send({ status: false, message: 'El token no es autentico' });
    }
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'ha expirado' });
    }

    req.user = payload.sub;
    return next();
}



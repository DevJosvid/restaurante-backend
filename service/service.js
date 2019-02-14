const jwt = require('jsonwebtoken');
const moment = require('moment');
const secret = 'proyecto123';

function createtoken(user) {
    const payload = {
        sub: user,
        iat: moment().unix(),
        exp: moment().add(16, 'days').unix(),
        secret: "1234"
    }
    return jwt.sign(payload, secret);
    //jwt.encode();
}

function decodetoken(token) {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, service.secret)
            if (payload.exp <= moment().unix()) {
                resolve({
                    status: 401, message: 'el token ha expirado'
                })

            }
            resolve(payload.sub);

        } catch (err) {
            reject({ status: 500, message: 'token invalido' })
        }
    })
}

module.exports = { createtoken, secret }

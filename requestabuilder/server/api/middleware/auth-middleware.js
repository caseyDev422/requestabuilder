const { JWT_SECRET } = require('../secrets/secret')
const e = require('express')
const jwt = require('jsonwebtoken')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        next({ status: 401, message: 'Token required'})
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            next({status: 401, message:'Token invalid'})
        }
        req.decoded = decoded;
    })
    next();
}

module.exports = {
    restricted
}
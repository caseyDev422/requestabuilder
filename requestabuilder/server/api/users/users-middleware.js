const e = require('express')
const User = require('./users-model')

const checkUserName = async (req, res, next) => {
   const user = await User.find({ userName: req.body.userName })
}



module.exports = {
    
}
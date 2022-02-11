const e = require('express')
const User = require('../users/users-model')

const checkUserName = async (req, res, next) => {
   const [user] = await User.find({ userName: req.body.username })
   if (!user){
       next({status: 401, message: 'Invalid Credentials. Try again or register'})

   } else {
       req.user = user
       next()
   }
}



module.exports = {
    checkUserName
}
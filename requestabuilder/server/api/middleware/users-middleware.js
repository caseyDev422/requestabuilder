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

const checkUserNameExists = async (req, res, next) => {
    const [user] = await User.find({ userName: req.body.userName })
    if(user){
        next({status: 400, message: 'Username Taken'})
    } else {
        next()
    }
    
}

const checkEmailExists = async (req, res, next) => {
    const [user] = await User.find({ email: req.body.email })
    if (user) {
        next({ status: 400, message: 'That email is already associated with an account' })
    }
    else{
        next()
    }
}


module.exports = {
    checkUserName,
    checkUserNameExists,
    checkEmailExists
}
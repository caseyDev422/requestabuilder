const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../secrets/secret')


module.exports = (user) => {
    const payload ={
        subject: user.user_id,
        usersname: user.username
        
    }

    const options = {
        expiresIn: "1h"
    }
    const token = jwt.sign(payload, JWT_SECRET, options)
    return token
}
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET || "shhh"


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
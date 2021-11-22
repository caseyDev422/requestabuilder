const express = require("express")
const router = express.Router()
const User = require('./users-model')


router.get("/test-user", (req, res) => {
    res.send("testing the user router")
})

router.post('/register', async (req, res, next) => {
   const newUser = new User(req.body);
    console.log(newUser);

    try {
        await newUser.save();
        res.status(200).json(
            { 
                message: "Success!",
                user: newUser
            }
        )
    } catch (error) {
        next(error)
    }
    console.log(req.body);
});

router.post('/login', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    res.status(200).json({ message: 'Welcome!'})
});

router.post('/profile', (req, res) => {
    //if wanting to change profile data
});




module.exports = router
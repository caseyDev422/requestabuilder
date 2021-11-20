const express = require("express")
const router = express.Router()


router.get("/test-user", (req, res) => {
    res.send("testing the user router")
})

router.post('/register', (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: "Success!"})
})

router.post('/login', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    res.status(200).json({ message: 'Welcome!'})
})

router.post('/profile', (req, res) => {
    //if wanting to change profile data
})




module.exports = router
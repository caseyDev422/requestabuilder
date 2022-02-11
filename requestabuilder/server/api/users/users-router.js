const express = require("express");
const router = express.Router();
const User = require("./users-model");
const tokenBuilder = require("./token-builder");
const bcrypt = require("bcryptjs");
const {checkUserName} = require('../middleware/users-middleware')

router.get("/test-user", (req, res) => {
  res.send("testing the user router");
});


router.post("/register", async (req, res, next) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  const newUser = new User(user);
  console.log(newUser);

  try {
    await newUser.save();
    res.status(200).json({
      message: "Success!",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
  console.log(req.body);
});

router.post("/login", checkUserName, async (req, res) => {
  const { password } = req.body;
  const { user } = req
  const token = tokenBuilder(req.body);
  
   if (bcrypt.compareSync(password, user.password)){
    res.status(200).json({ 
      message: `Welcome back ${user.userName}.`, 
      token: token, jobs: user.associatedJobs, 
      name: user.userName})
}});

router.post("/profile", (req, res) => {
  //if wanting to change profile data
});

module.exports = router;

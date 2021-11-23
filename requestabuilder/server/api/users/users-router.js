const express = require("express");
const router = express.Router();
const User = require("./users-model");
const tokenBuilder = require("./token-builder");
const brcrypt = require("bcryptjs");

router.get("/test-user", (req, res) => {
  res.send("testing the user router");
});

router.post("/register", async (req, res, next) => {
  let user = req.body;
  const hash = brcrypt.hashSync(user.password, 8);
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

router.post("/login", async (req, res) => {
  const [user] = await User.find({userName: req.body.username}).exec()
  const { password } = req.body
  const token = tokenBuilder(req.body)
  const validUser = brcrypt.compareSync(password, user.password)
  if(validUser){
      res.status(200).json({ message: `Welcome back ${user.userName}.`, token: token, jobs: user.associatedJobs, name: user.userName})
  } else {
      res.status(401).json({ message: "Invalid Credentials!"})
  }
});

router.post("/profile", (req, res) => {
  //if wanting to change profile data
});

module.exports = router;

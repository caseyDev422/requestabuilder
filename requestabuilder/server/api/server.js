const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// imports for routers
const usersRtr = require("./users/users-router");
const jobsRtr = require("./jobs/jobs-router");
//

app.use(cors());
app.use(express.json());

/**
 * **TODO**
 * Need to put username, db, url, and password in env variables
 */
const url =
  "mongodb+srv://RequestAbuilder:d366ujgQyfyX68B@requestabuilder.g0esr.mongodb.net/RABDB?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", (error) => {
  error ? console.error(error) : console.log("Mongoose connected");
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.send("API RUNNING");
});
// using routers here
app.use("/", usersRtr);
app.use("/", jobsRtr);
//

// catch all errors
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;

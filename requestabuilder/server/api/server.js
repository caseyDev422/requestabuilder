const express = require('express');
const cors = require('cors')
const app = express();

// imports for routers 
const usersRtr = require("./users/users-router")
const jobsRtr = require("./jobs/jobs-router")
//


app.use(cors());
app.use(express.json())



app.get('/', (req, res) => {
    console.log(__dirname);
    res.send("API RUNNING")
})
// using routers here
app.use("/", usersRtr)
app.use("/", jobsRtr)
//


// catch any errors
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message})
})

// //will need to add queryParams for filtered jobs
// app.get('/all-jobs', (req, res) => {
//     // to send back all jobs
// })

// app.get('/profile', (req, res) => {
//     // to render profile data to screen
// })

// app.get('/my-jobs/completed', (req, res) => {
//     // send back jobs with the completion status
// })

// app.get('/my-jobs/created', (req, res) => {
//     // send back jobs with the user created
// })

// app.get('/my-jobs/saved', (req, res) => {
//     // send back jobs with the saved status
//     // these jobs are the ones that a user takes on
// })

// app.post('select-job', (req, res) => {
//     // accept request to set job to selected and send back verification
// })

// app.post('/profile', (req, res) => {
//     //if wanting to change profile data
// })

// app.post('/create-job', (req, res) => {
//     console.log(req.body);
//     res.status(200).json(req.body)
// })

// app.post('/register', (req, res) => {
//     console.log(req.body);
//     res.status(200).json({ message: "Success!"})
// })

// app.post('/login', (req, res) => {
//     console.log(req.body.username);
//     console.log(req.body.password);
//     res.status(200).json({ message: 'Welcome!'})
// })

module.exports = app
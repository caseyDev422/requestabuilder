const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());



app.get('/', (req, res) => {
    console.log(__dirname);
})

//will need to add queryParams for filtered jobs
app.get('/all-jobs', jsonParser, (req, res) => {
    // to send back all jobs
})

app.get('/profile', jsonParser, (req, res) => {
    // to render profile data to screen
})

app.get('/my-jobs/completed', (req, res) => {
    // send back jobs with the completion status
})

app.get('/my-jobs/created', (req, res) => {
    // send back jobs with the user created
})

app.get('/my-jobs/saved', (req, res) => {
    // send back jobs with the saved status
    // these jobs are the ones that a user takes on
})

app.post('select-job', (req, res) => {
    // accept request to set job to selected and send back verification
})

app.post('/profile', jsonParser, (req, res) => {
    //if wanting to change profile data
})

app.post('/create-job', jsonParser, (req, res) => {
    console.log(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        message: 'Successfully created job',
        statusCode: 200
    }))
})

app.post('/register', jsonParser, (req, res) => {
    console.log(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        message: "Successfully Registered",
        statusCode: 200
    }))
})

app.post('/login', jsonParser, (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({message: 'Welcome'}));
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
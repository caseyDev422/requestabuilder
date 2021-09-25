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

app.post('/login', jsonParser, (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({message: 'Welcome'}));
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
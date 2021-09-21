const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    console.log(__dirname);
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
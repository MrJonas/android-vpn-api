const express = require('express')
const app = express()
const port = 4200;
const server = require('./servers');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello");
});
app.get('/register', (req, res) => {
    res.send("Link to register page");
});

app.use('/servers', server);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const app = express()
const port = 4200;
const server = require('./servers');
const register = require('./register');
var mysql      = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello");
});

app.use('/servers', server);
app.use('/register', register);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
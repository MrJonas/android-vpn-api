const express = require('express')
const app = express()
const port = 4200;
const server = require('./servers');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.send("hello");
});
app.get('/servers', server);
app.get('/register', (req, res) => {
    res.send("Link to register page");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const app = express()
const port = 4200;
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const users = require("./../mock-data/users");
console.log(users);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(basicAuth({users: users}));
app.post('/', (req, res) => {
    res.send();
});
app.get('/servers', (req, res) => {
    let d = new Date();
    console.log(d.getDate() + ' servers');
    res.json({servers: [
        {
            h: "hostname",
            l: "location",
            c: "country",
            cc: "LT"
        },{
            h: "hostname",
            l: "location",
            c: "country",
            cc: "LT"
        }
    ]});
});
app.post('/servers', (req, res) => {
    res.send("test");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
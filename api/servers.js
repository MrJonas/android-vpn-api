const express = require('express')
const app = express();
const basicAuth = require('express-basic-auth');
const users = require("./../mock-data/users");
app.use(basicAuth({users: users}));
app.get('/', (req, res) => {
    let d = new Date();
    console.log(d.getDate() + 'servers');
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

module.exports = app;
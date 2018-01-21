import {servers} from './../mock-data/servers';
const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');


app.post('/', (req, res) => {
    res.json(servers);
});

module.exports = app;
const express = require('express');
const app = express();

import {registerUser} from './mysql.helper/register.user';

app.get('/register', (req, res) => {
    res.send("Link to register page");
});

app.post('/', (req, res) => {
    registerUser(req.body).then(r=> res.send({status: 'OK'}), e=>res.send({status: 'FAIL'}));
});

module.exports = app;
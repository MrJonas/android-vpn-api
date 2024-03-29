import {servers} from './../mock-data/servers';
import {asyncAuthorizer} from './mysql.helper/check.user';
const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');

app.use(basicAuth({
    authorizer: asyncAuthorizer,
    authorizeAsync: true
}));
app.get('/', (req, res) => {
    res.json(servers);
});

module.exports = app;
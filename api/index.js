const express = require('express')
const app = express()
const port = 4200;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.send();
});
app.get('/servers', (req, res) => {
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
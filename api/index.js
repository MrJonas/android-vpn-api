const express = require('express')
const app = express()
const port = 4200;

app.get('/', (req, res) => {
    console.log(req);
    res.send(JSON.stringify(req.body));
});
app.post('/', (req, res) => {
    console.log(req);
    res.send(JSON.stringify(req.body));
});
app.post('/servers', (req, res) => {
    console.log(req);
    res.send(JSON.stringify(req.body));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
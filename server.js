const express = require('express');
const app = express();


app.use(express.json());

app.get('/list-des-utilisateurs', function (req, res) {
    res.json([
        {username: "honore", password: "@#$%^&*((&"},
        {username: "aminata", password: "123468"}
    ])
});
app.post('/', function (req, res) {
    res.end('Hello World from post request')
});
app.put('/put-request', function (req, res) {
    res.json(req.body)
});


app.listen(8000);

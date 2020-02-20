const express = require('express');
const path = require('path');
const {html} = require('./html-view.js');

const app = express()
const port = 3000;


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => res.render('example'));
app.get('/route1', (req, res) => {
    res.send('Hello Route 1');
});
app.get('/param/:vals', (req, res) => {
    res.send('Hello Employee #' + req.params.vals);
});

app.listen(port, () => console.log(`Example app listening on port 3000`));

//Express.js, 3 views, a parametrized route, pug, parametrized route value in view

const express = require('express');
const path = require('path');
const {html, html2} = require('./html-view.js');

//add express and set local host port
const app = express()
const port = 8000;

//used for static assests like a image
app.use(express.static(__dirname));

//set view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
console.log("Path: " + path.join(__dirname, "views"));

//get views based on routes
app.get('/', (req, res) => res.render('view1'));
app.get('/view2', (req, res) => res.render('view2'));
app.get('/param/:val/:amount', (req, res) => res.send(html2(req.params)));

app.listen(port, () => console.log(`Example app listening on port 8000`));



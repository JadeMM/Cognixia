const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//const scaffold = require('./api/scaffold');
const singleUser = require('./api/singleUser');
const multiUser = require('./api/multiUsers');
const addUser = require('./api/addUser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

//Route definitions 
//app.get('/', scaffold);
app.get('/user/:userid', singleUser);
app.get('/users/:pagenum', multiUser);
app.post('/user/', addUser);



app.listen(port, () => console.log(`listening on port ${port}!`));
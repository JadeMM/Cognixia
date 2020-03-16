const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//route paths
const singleUser = require('./api/singleUser');
const multiUser = require('./api/multiUsers');
const addUser = require('./api/addUser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

//Route definitions 
app.get('/user/:userid', singleUser);
app.get('/users/:pagenum', multiUser);
app.post('/user/', addUser);



app.listen(port, () => console.log(`listening on port ${port}!`));
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 8000;

//create route paths
const createUser = require('./api/createUser');
const getUsers = require('./api/getUsers');
const getUser = require('./api/getUser');

//connect to mysql 
const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    database: 'sample_app',
    password: '1234'
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes here
app.post('/user', (req, res) => createUser(req, res, connection));
app.get('/users', (req, res) => getUsers(req, res, connection));
app.get('/user', (req, res) => getUser(req, res, connection));

 //Close the app when node is termiated
process.on('SIGTERM', function() {
    app.close(() => {
        connection.end();
    });

    setTimeout(() => {
        console.error('Couldnt close connection in time, forcefully shutting down');
        process.exit(1);
    }, 30*1000);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));




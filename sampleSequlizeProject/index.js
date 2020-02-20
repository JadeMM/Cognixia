const { Sequelize, Model, DataTypes } = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//sequelizer
const sequelize = require('./database');

//models
const User = require('./models/user');

//routes
const createUser = require('./api/createUser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Put routes here
app.post('/user', (req, res) => createUser(req, res, User));

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


sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});
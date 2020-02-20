const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const app = express();
const port = 3000;

const createUser = require('./api/createUser');
const getUsers = require('./api/getUsers');
const getUser = require('./api/getUser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';

mongoClient.connect(url, function(err, database) {
    if (err) throw err;

    const db = database.db('test_database');
    console.log("Database created!");

    //Put routes here
    app.post('/user', (req, res) => createUser(req, res, db));
    app.get('/users', (req, res) => getUsers(req, res, db));
    app.get('/user', (req, res) => getUser(req, res, db));

    //Close the app when node is termiated
    process.on('SIGTERM', function() {
        app.close(() => {
            db.close();
        });

        setTimeout(() => {
            console.error('Couldnt close connection in time, forcefully shutting down');
            process.exit(1);
        }, 30*1000);
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});




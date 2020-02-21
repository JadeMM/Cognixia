const { Sequelize, Model, DataTypes } = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const app = express();
const port = 3000;

//sequelizer
const sequelize = require('./database');

//models
const User = require('./models/user');

//routes
const createUser = require('./api/createUser');
const authenticate = require('./api/authenticate');

//set view engine to html
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'css')));
app.use(session({secret: "Shh, its a secret!"}));


//Put routes here
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/createUser.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname + '/views/login.html')));
app.get('/members', (req, res) => res.sendFile(path.join(__dirname + '/views/members.html')));
app.get('/members', (req,res) => {
    if (session.authenticated === true) {
        return res.sendFile(path.join(__dirname + '/views/members.html'))
    } else {
        res.redirect(301, '/')
    }
});

app.post('/signup', function(req, res) {
    createUser(req, res, User)
    res.sendFile(path.join(__dirname + '/views/members.html'));
});

app.post('/auth', (req, res) => {
    authenticate(req, res, User, session, (response) => {
        const authenticated = [];
        if(response !== 'error' && response !== 'noauth') {
            authenticated.push(response);
            res.status(500).sendFile(path.join(__dirname + '/views/members.html'));
        } else if (response === 'noauth'){
            res.status(401).sendFile(path.join(__dirname + '/views/login.html'));
        } else {
            res.status(404).sendFile(path.join(__dirname + '/views/login.html'));
        }
    })
});

app.post('/logout', (req, res) => {
    session.authenticated = false
    res.redirect(301, '/')
  })

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
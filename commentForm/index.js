//Express.js, 3 views, a parametrized route, pug, parametrized route value in view

const express = require('express');
const path = require('path');
var cons = require('consolidate');
var fs = require('fs');

//add express and set local host port
const app = express()
const port = 8000;


//set view engine to html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.urlencoded());

//get views based on routes
app.get('/', (req, res) => res.render('form'));

app.post('/form', (req, res) => {
    const username = req.body.name;
    var today = new Date(); 
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours()+":"+today.getMinutes();  

    const filename = 'input_modified.txt';
    fs.appendFile(filename, username + ' added at ' + date+'\n', function (err) {
        if (err) throw err;
    });

    res.sendFile(path.join(__dirname + '/index.html'));
    res.end();
});

app.listen(port, () => console.log(`Example app listening on port 8000`));





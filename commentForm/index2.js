//Express.js, 3 views, a parametrized route, pug, parametrized route value in view

const express = require('express');
const path = require('path');
var resultTable = require('./html-view.js');
var fs = require('fs');

//add express and set local host port
const app = express()
const port = 8080;

var comments = [];


//set view engine to html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.urlencoded());

//get views based on routes
app.get('/', (req, res) => res.render('form2'));
app.get('/table', (req, res) => res.send(resultTable(comments)));

app.post('/form', (req, res) => {
    const email = req.body.email;
    const comment = req.body.comment;
    var today = new Date(); 
    var date = today.getHours() +':' +today.getMinutes()+" "+ today.getP;  
    
    var item = JSON.parse('{"email":"'+email+': ", "comment":"'+comment+' - '+date+'"}');
    comments.push(item);

    const filepath = 'content.txt';
    fs.appendFile(filepath, email +': '+ comment+ ' - ' + date+'\n', function (err) {
        res.end();
    });
});

app.listen(port, () => console.log(`Example app listening on port 8000`));





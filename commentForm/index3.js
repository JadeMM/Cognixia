const express = require('express');
const path = require('path');
var html = require('./html-view.js');
var fs = require('fs');

//add express and set local host port, create array
const app = express()
const port = 8080;
var comments = [];

function getComments(){
    comments = [];
    fs.readFile("content.txt", 'utf-8', function(err, content) {
        data.push(JSON.parse(content));
      });
}

//set view engine to html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded());

//get views based on routes
app.get('/', (req, res) => res.send(html(comments)));

//add form info to text file and to array
app.post('/', (req, res) => {
    const email = req.body.email;
    const comment = req.body.comment;
    var today = new Date(); 
    var date = today.getHours() +':' +today.getMinutes();  
    
    //create item
    var item = JSON.parse('{"email":"'+email+': ", "comment":"'+comment+' - '+date+'"}');
    comments.push(JSON.stringify(item));

    //send to file
    const filepath = 'content.txt';
    fs.appendFile(filepath, item+'\n', function (err) {
        res.end();
    });

    res.send(html(comments));
});

app.listen(port, () => console.log(`Example app listening on port 8080`));





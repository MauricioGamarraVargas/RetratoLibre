const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static('public'));
//Route index or home page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
    
});
//Route contact page
app.get('/contact', (req, res) =>{
    res.sendFile(__dirname + '/contact.html');
})

app.get('/menu', (req, res) =>{
    res.sendfile(path.join(__dirname + '/menu.html'));
})


app.listen(3000);
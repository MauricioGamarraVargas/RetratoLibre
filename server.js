const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static('public'));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'))
    
});

app.get('/contact', (req, res) =>{
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:name', (req, res) => {
    res.render('profile', {person: req.params.name});
})
app.listen(3000);
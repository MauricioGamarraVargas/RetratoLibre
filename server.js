const express = require('express');
const path = require('path');
const app = express();


app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

//Route index or home page
app.get('/', function(req, res){
    res.render(__dirname + '/index');
    
});
//Route contact page
app.get('/contact', (req, res) =>{
    res.render(__dirname + '/contact');
})

app.get('/menu', (req, res) =>{
    res.render(__dirname + '/views/partials/menu.ejs');
})

app.get('/login', (req,res)=>{
    res.render(__dirname + '/login');
})

app.listen(3000);
const express = require('express');
const app = express();
const databases = require('./config/connection');

//client
const index = require('./controllers/index.Controller');
const contact = require('./controllers/contacts.Controller');

//Admin
const login = require('./controllers/login.Controller');
const contactAdmin = require('./controllers/adminContact.Controller');

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.use('/', index);
app.use('', contact);

//app.use to Admin
app.use('',login);
app.use('/admin', contactAdmin);

//Route index or home page
const port = 3000;
const server = app.listen(port, function() {
    if(!server){
        console.log('SERVER ERROR');
    }
    else{
        console.log('Runing server to port: '+ port);
    }
});

const express = require('express');
const app = express();
const routing = require('./routes/route');

app.use('', routing);
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

//Route index or home page
app.get('/', function(req, res){
    res.render(__dirname + '/index');    
});

// app.get('/menu', (req, res) =>{
//     res.render(__dirname + '/views/partials/menu.ejs');
// })
const server = app.listen(3000);
if(server){
    console.log('server runing...');
}
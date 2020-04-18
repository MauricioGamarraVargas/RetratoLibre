const mongoose = require('mongoose');
const contact = require('../models/contact.Schema');
mongoose.connect('mongodb://localhost:27017/retratoLibre', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', ()=>console.error(console, 'connection error:'));
db.once('open', function() {
  console.log('connection data bases success!');
});

module.exports = mongoose;
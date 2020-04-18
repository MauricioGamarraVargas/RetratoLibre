const express = require('express');
const router = express.Router();
const path = require('path');
const contactM= require('../models/contact.Schema');
var bodyParser = require('body-parser'); 

router.get('/contact/:id', (req,res)=>{
    contactM.findOne({_id:req.params.id}, function(err, result){
        if(err){
            console.log('Error update');
        }
        else{
            const contact = path.join(__dirname, '../views/adminContacts.ejs');
            res.render(contact, {contactUpdate:result});
        }
    })
});

module.exports = router;
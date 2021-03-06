const express = require('express');
const router = express.Router();
const path = require('path');
const contactM = require('../models/contact.Schema');

router.get('/contact', (req, res)=>{
    contactM.find((err, contactM)=>{
        if(err){
            console.log('error');
        }
        else{
            const contact= path.join(__dirname, '../views/contact.ejs');
            res.render(contact, {dataContact:contactM});
        }
    })
    
});

module.exports = router;
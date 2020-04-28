const express = require('express');
const router = express.Router();
const contactM = require('../models/contact.Schema');
const path = require('path');

router.get('/admin', (req, res)=>{
    contactM.find((err, contactM)=>{
        if(err){
            console.log('error');
        }
        else{
            const contact= path.join(__dirname, '../views/admin.ejs');
            res.render(contact, {dataContact:contactM});
            //comment...
        }
    })
});

module.exports = router;
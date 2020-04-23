const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
const contactM= require('../models/contact.Schema');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/contact/:id', (req, res)=>{
    contactM.findOne({_id:req.params.id}, (err, resut)=>{
        if(err){
            res.send('OOPS! a error ocurred');
        }
        else{
            const contact = path.join(__dirname,'../views/adminContact.ejs');
            res.render(contact, {dataContact:resut, errors:{}});
        }
    });
});

router.post('/contact/:id',urlencodedParser, (req, res)=>{
    contactM.findByIdAndUpdate(req.params.id, req.body,{ runValidators: true},function(err, result){
        if(err){
            console.log(err);
            const contactAdmin = path.join(__dirname, '../views/adminContact.ejs');
            res.render(contactAdmin, {errors:err.errors, dataContact:req.body});
        }
        // else{
        //     res.redirect('/admin')
        // }
    })
});

 // const contactAdmin = path.join(__dirname, '../views/adminContact.ejs');
            // res.render(contactAdmin, {errors:err.errors});
module.exports = router;
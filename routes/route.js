const express = require('express');
let router = express.Router();
const path = require('path');

//Route contact 
router
    .route('/contact')
    .get((req, res)=>{  
        const contact = path.join(__dirname, '../contact.ejs');
        res.render(contact);        
    })
    .post((req, res)=>{
        res.send('this is post');
    });

//Route login
router
    .route('/login')
    .get((req, res)=>{
        const login = path.join(__dirname , '../login.ejs');
        res.render(login);
    })

module.exports = router;

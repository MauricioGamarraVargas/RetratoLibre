const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/contact', (req, res)=>{
    const contact = path.join('../views/contact.ejs');
    res.render(contact);
});

module.exports = router;
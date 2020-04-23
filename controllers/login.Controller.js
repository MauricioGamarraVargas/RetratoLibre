const express = require('express');
const router = express.Router();
const path = require('path');

//Route login
router.get('/login',(req, res)=>{
    const login= path.join(__dirname, '../views/login.ejs');
    res.render(login);
})

module.exports = router;

const express = require('express');
let router = express.Router();
const path = require('path');


router.get('/', (req, res)=>{
    const index = path.join(__dirname, '../views/index.ejs');
    res.render(index);
});
// router
//     .route('/')
//     .get((req, res, next) => {
//         person.find((err, person) => {
//             if (err) {
//                 throw err;
//             }
//             else {
//                 const index = path.join(__dirname, '../views/index.ejs');
//                 res.render(index, { person: person });
//             }
//         })
//     })



module.exports = router;
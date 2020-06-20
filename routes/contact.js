
const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.render('content/contactus',{user:req.user});
});

module.exports=router;
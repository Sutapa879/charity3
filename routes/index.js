const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('content/index',{user:req.user});
});

router.get('/test', (req, res) => {
    res.render('auth/test',{user:req.user});
});

router.get('/profileIndex', (req, res) => {
    res.render('content/profileIndex',{user:req.user});
});



module.exports = router; 
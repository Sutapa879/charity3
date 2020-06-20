const express = require('express');
const router = express.Router();

router.get('/causes', (req, res) => {
    res.render('content/causes',{user:req.user});
});

router.get('/causes1', (req, res) => {
    res.render('content/causes1',{user:req.user});
});

router.get('/causes2', (req, res) => {
    res.render('content/causes2',{user:req.user});
});

router.get('/causes3', (req, res) => {
    res.render('content/causes3',{user:req.user});
});

module.exports = router; 
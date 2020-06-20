const express = require('express');
const router = express.Router();

router.get('/events', (req, res) => {
    res.render('content/events',{user:req.user});
});

router.get('/events1', (req, res) => {
    res.render('content/events1',{user:req.user});
});

router.get('/events2', (req, res) => {
    res.render('content/events2',{user:req.user});
});

router.get('/events3', (req, res) => {
    res.render('content/events3',{user:req.user});
});
module.exports = router; 
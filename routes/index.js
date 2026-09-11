var express = require('express');
var router = express.Router();
var async = require('async');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:page', function(req, res, next) {
    switch (req.params.page) {
        case 'blockchain':
            return res.render('blockchain', {page: 'blockchain'});
        case 'encryption':
            return res.render('encryption', {page: 'encryption'});
        case 'index':
            return res.render('index', {page: 'index'});
        case 'keys':
            return res.render('keys', {page: 'keys'});
        case 'signatures':
            return res.render('signatures', {page: 'signatures'});
        case 'transaction':
            return res.render('transaction', {page: 'transaction'});
        default:
            return next();
    }
});

module.exports = router;

'use strict';

var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res){
  
});

router.get('/messages', function(req, res){
  console.log('find: ', Message.find());

});

module.exports = router;
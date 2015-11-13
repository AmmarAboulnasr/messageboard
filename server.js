'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-Parser');
var morgan = require('morgan');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/messageboardapp');

var app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/index'));

app.listen(PORT, function() {
  console.log('Listening on port ', PORT);
});
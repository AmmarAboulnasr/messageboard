'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  message: String,
  author: String,
  time: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
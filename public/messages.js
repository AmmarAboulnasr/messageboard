'use strict';

$(document).ready(init);

function init() {
  generateMessages();
  $('#add').click(addMessage);

}

function generateMessages() {
  $.get('/messages')
  .done(function(data) {
    
  })

}

function addMessage() {
  var fullMessage = {};
  fullMessage.message = $('#message').val();
  fullMessage.author = $('#author').val();
  var time = moment();
  fullMessage.time = moment().format('MMM DD YYYY, h:mm a');
  $('#message').val('');
  $('#author').val('');

  $.post('/', fullMessage)
  .done(function(data) {
    // console.log(data);

  });
}
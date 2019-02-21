$(function(){
  var messageBody = $(".right-content__message-body")

  function callAjax(){
    var message_id = $('.message:last').data('id');
    var url = $(".form-wrapper .new_message").attr("action");

    $.ajax({
    type: 'GET',
    url: url,
    data:{
      message:{
      id: message_id
      }
    },
    dataType: 'json'

$(function(){
  var messageBody = $(".right-content__message-body")

  function buildHTML(message){
    var html = "<div class=\"message\">"
    + "<p class=\"username\">"
    + message.user_name
    + "</p>"
    + "<span class=\"date-and-time\">"
    + message.time
    + "</span>"
    + "<p class=\"text\">"
    + (message.content ? message.content : "" )
    + "</p>"
    + "<div class=\"image\">"
    + (message.image.url ? "<image src=\"" + message.image.url + "\">": "")
    + "</div>"
    + "</div>"
    messageBody.append(html);
  }

  function scrollToBottom(){
    messageBody.animate({
      scrollTop: messageBody[0].scrollHeight
    },500)
  }

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
  }).done(function(messages){
    if(messages){
      messages.forEach(function(message){
      buildHTML(message);
      });
      scrollToBottom();
      }
  }).fail(function(){
    alert("エラーが発生しました");
    });
  };

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(function(){
      callAjax();
    }, 5000)
  }
});


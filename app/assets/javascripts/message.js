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

  $("#new_message").on("submit", function(e){
  e.preventDefault();
  var url = $("#new_message").attr("action");
  var formData = new FormData(this);
  $(this)[0].reset();

  $.ajax({
    type: 'POST',
    url: url,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  }).done(function(message){
    buildHTML(message);
    scrollToBottom();
    }).fail(function(){
      alert("エラーが発生しました");
    });
  });
});

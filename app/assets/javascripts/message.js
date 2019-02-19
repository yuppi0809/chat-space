$(function(){
  var messageBody = $(".right-content__message-body")
  function buildHTML(message){
    var modifiedTime = message.time.slice(0, 10) + " " + message.time.slice(11, 16);
    var html = "<div class='message id=''>"
    + "<p class='username'>"
    + message.user_name
    + "</p>"
    + "<span class='date-and-time'>"
    + modifiedTime
    + "</span>"
    + "<p class='text'>"
    + (message.content ? message.content : "" )
    + "</p>"
    + "<div class='image'>"
    + (message.image.url ? "<image src=\"" + message.image.url + "\">": "")
    + "</div>"
    + "</div>"
    messageBody.append(html);
  }

  $("#new_message").on("submit", function(e){
  e.preventDefault();
  var url = $("#new_message").attr("action");
  var formData = new FormData(this);
  $.ajax({
    type: 'POST',
    url: url,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  })
});

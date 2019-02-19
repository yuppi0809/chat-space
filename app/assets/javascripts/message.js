$(function(){
    var modifiedTime = message.time.slice(0, 10) + " " + message.time.slice(11, 16);
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

$(function(){
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

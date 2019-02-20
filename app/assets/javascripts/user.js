$(function(){

  var listDisplay = $("#user-search-result");
  var selectedUsersDisplay = $(".chat-group-form__field:nth-child(5)").find(".chat-group-form__field--right");

  $("#user-search-field").on("keyup", function(){
    var input = $(this).val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: {
          search: input
        },
        dataType: 'json'

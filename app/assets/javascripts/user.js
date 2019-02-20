$(function(){

  $("#user-search-field").on("keyup", function(){
    var input = $(this).val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: {
          search: input
        },
        dataType: 'json'

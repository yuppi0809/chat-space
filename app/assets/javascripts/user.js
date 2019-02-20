$(function(){

  var listDisplay = $("#user-search-result");
  var selectedUsersDisplay = $(".chat-group-form__field:nth-child(5)").find(".chat-group-form__field--right");

  function appendUser(user){
    var html =
        `<div class="chat-group-user clearfix">
           <p class="chat-group-user__name">${ user.name }</p>
           <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
        </div>`

    listDisplay.append(html);
    }

  function appendNoUser(message){
    var html =
         `<div class="chat-group-user clearfix">
           <p>${message}</p>
        </div>`
    listDisplay.append(html);
  }

  $("#user-search-field").on("keyup", function(){
    var input = $(this).val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: {
          search: input
        },
        dataType: 'json'
      }).done(function(users){
        if (users.length !== 0){
          users.forEach(function(user){
          appendUser(user);
          })
        }
        else{
          appendNoUser("一致するユーザーはいません");
        }
      }).fail(function(){
        alert("ユーザー検索に失敗しました");
      })
    }
  });

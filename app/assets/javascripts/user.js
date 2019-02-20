$(document).on('turbolinks:load', function() {

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

  function appendSelectedUser(id, name){
    var html =
      `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
        <input name='group[user_ids][]' type='hidden' value='${id}'>
        <p class='chat-group-user__name'>${name}</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
      </div>`

    selectedUsersDisplay.append(html);
  }


  $("#user-search-field").on("keyup", function(){
    var input = $(this).val();
    listDisplay.empty();
    if (input){
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

  listDisplay.on("click", ".chat-group-user__btn--add", function(e){
    e.preventDefault();
    $(this).parent().remove();
    var user_id = $(this).attr("data-user-id");
    var user_name = $(this).attr("data-user-name");
    appendSelectedUser(user_id, user_name)
  });

  selectedUsersDisplay.on("click", ".chat-group-user__btn--remove", function(){
    $(this).parent().remove();
  })
});

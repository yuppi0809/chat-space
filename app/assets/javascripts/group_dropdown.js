$(document).on('turbolinks:load', function(){
  var groupSelect = $(".group-select")

  var rightContent = $(".right-content")

  var groupsContainer = $(".left-content__groups-display")

  function showGroups(){
    groupSelect.toggleClass("opacity");
    groupsContainer.toggleClass("show");
      togglePadding(groupsContainer);
       togglePadding(rightContent);
  }


  function togglePadding(element){
    element.toggleClass("padding-top-for-dropdown")
  }

  function changePadding(){
    if($(window).width() < 700){
    rightContent.addClass("padding-top-for-dropdown");
    }
    else{
      rightContent.removeClass("padding-top-for-dropdown")
    }
  }

changePadding();

  $(window).resize(function(){
    changePadding();

  });

  groupSelect.on("click", function(e){
    showGroups();
  });
});

$(function(){
  var groupSelect = $(".group-select")
  var groups = $(".left-content__group-display")

  function showGroups(){
    groupSelect.toggleClass("opacity");
    groups.toggleClass("show");
  }

  groupSelect.on("click", function(e){
  showGroups();
  });
});

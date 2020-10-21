$(function() {
  var devourButton = $(".devour-btn");

  devourButton.on("click", function(event) {
  console.log("clicked");
  var id = $(this).data("value");
  console.log(id);
});


})
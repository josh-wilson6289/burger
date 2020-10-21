$(function() {

  // changes devoured to true on click
  $(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

  // updates table with new devoured status as true, then reloads the page
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        location.reload();
      }
    );
});

$(".create-form").on("submit", function(event) {
  // prevent default on submit event and create newBurger from input
  event.preventDefault();
  console.log("clicked");

  var newBurger = {
    burger_name: $("#burger-name").val().trim()
  };

  console.log(newBurger);
  // Post request to database
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      location.reload();
    }
  );
});


  
})
$(function() {

  $(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
    
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        location.reload();
      }
    );
});

  
})
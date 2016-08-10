$(document).ready(function(event) {
  $("#blanks form").submit(function(event){
    var personName = $("input#person").val().toUpperCase();
    $(".abby").text(personName);
    $("#letter").show();
    event.preventDefault();
  });
});

$(document).ready(function(event) {
  $("#blanks form").submit(function(event){
    var personName = $("input#person").val();

    $(".abby").append(personName);

    $("#letter").show();

    event.preventDefault();
  });
});

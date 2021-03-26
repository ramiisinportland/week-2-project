$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    let coffee = parseInt($("#coffee").val());
    let beach = parseInt($("#beach").val());
    let spicy = parseInt($("#spicy").val());
    let tacos = parseInt($("#tacos").val());
    let night = parseInt($("#night").val());
    let total = coffee + beach + spicy + tacos + night ;

    if (total < 5) {
      alert("Please answer all five questions by Yes or No in order to get the result 🤥 .");
    } else if (total === 5) {
      $(".result").text("Ruby ");
    } else if (total === 7 || total >= 9) {
      $(".result").text("C#");
    } else if (total === 6 || total === 8) {
      $(".result").text("JavaScript");
    } else {
      $(".result").text("Try again 🤥 .");
    }

    $("#result").show();

  });
});
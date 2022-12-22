$(function(){
  $("#car").animate({ left: "345px" }, 3000, "linear");
  setInterval(function () {
    $("#src").text(
      `<img src='12.gif' style='left: ${$("#car").css("left")}'>`
    );
  }, 130);
})
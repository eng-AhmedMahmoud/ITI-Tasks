$(function () {
  $("#about").click(function () {
    $("#story").css({ "display": "block" });
    $("#gallery-container").css({ "display": "none" });
    $(".dropdown-content").css({ "display": "none" });
    $("#complain-container").hide();
    $("#complain-result").hide();
  });
  $("#gallery").click(function () {
    $("#story").css({ "display": "none" });
    $("#gallery-container").css({ "display": "block" });
    $(".dropdown-content").css({ "display": "none" });
    $("#complain-container").hide();
    $("#complain-result").hide();
  })
  var i = 1;
  var images = $(".img");
  console.log(images[0])
  $("#right").click(function () {
    if (i >= images.length) i = 0;
    i++;
    images[0].src = "../Images/" + i + ".jpg";
  });
  $("#left").click(function () {
    if (i <= 1) i = images.length
    i--;
    images[0].src = "../Images/" + i + ".jpg";
  });

  $("#services").click(function () {
    $("#story").css({ "display": "none" });
    $("#gallery-container").css({ "display": "none" });
    $(".dropdown-content").slideToggle();
    $("#complain-container").hide();
    $("#complain-result").hide();

  });
  $("#complain").click(function () {
    $("#story").css({ "display": "none" });
    $("#gallery-container").css({ "display": "none" });
    $(".dropdown-content").css({ "display": "none" });
    $("#complain-container").slideToggle();
  });
  $("#send").click(function () {
    $("#span-name").html(" " + $("#name").val());
    $("#span-email").html(" " + $("#email").val());
    $("#span-complain").html(" " + $("#textarea-complain")[0].value);
    $("#span-phone").html(" " + $("#phone").val());
    $("#story").css({ "display": "none" });
    $("#gallery-container").css({ "display": "none" });
    $(".dropdown-content").css({ "display": "none" });
    $("#complain-container").hide();
    $("#complain-result").slideToggle();
  });
  $("#back").click(function () {
    $("#story").css({ "display": "none" });
    $("#gallery-container").css({ "display": "none" });
    $(".dropdown-content").css({ "display": "none" });
    $("#complain-result").hide();
    $("#complain-container").slideToggle();
  });
});
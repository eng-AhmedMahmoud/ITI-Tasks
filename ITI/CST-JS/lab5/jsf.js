function init() {
  document.getElementById("sb").onclick = submit;
}
function submit() {
  var values = document.getElementsByTagName("input");
  var d = new Date();
  d.setDate(d.getDate() + 14);

  for (var i = 0; i < values.length; i++) {
    if (values[i].name != "gender" && values[i].name != "submit") {
      setcookie(values[i].name, values[i].value, d);
    }
  }

  var gender = document.getElementsByName("gender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      setcookie(gender[i].name, gender[i].value, d);
    }
  }
  var colorchoose = document.getElementsByTagName("select")[0].selectedIndex;
  var color = document.getElementsByTagName("option")[colorchoose].value;
  setcookie("color", color, d);
  setcookie("counter", 0, d);

  window.location.replace("welcomepage.html");
}
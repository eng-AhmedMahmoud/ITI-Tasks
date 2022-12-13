function show() {
  var d = new Date();
  d.setDate(d.getDate() + 14);
  counter = parseInt(getcookie("counter"))
  setcookie("counter", ++counter, d);
  var username = getcookie("name");
  // console.log(username);
  var color = getcookie("color");
  var gender = getcookie("gender");
  document.getElementsByTagName("img")[0].src = gender == "male" ? "1.jpg" : "2.jpg";
  document.getElementById("t").innerHTML = "<b> welcome <span style = 'color :" + color + "'> " + username + "</span></b>" + "you have visited this site" + "<span style = 'color:" + color + "'><b>" + counter + "</b></span>" + "times";
}

function init() {
  show();
}
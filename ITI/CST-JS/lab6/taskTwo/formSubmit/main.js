//create custom event
var myEvent = new Event("timeout");
var userName = document.getElementById("username");
var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var fire;

//handle Custom Event
window.addEventListener("timeout", function () {
  if (userName.value !== "" && mobile.value !== "" && email.value !== "") {
    clearInterval(fire);
  } else {
    alert("Enter your data ");
  }
});

fire = setInterval(function () {
  window.dispatchEvent(myEvent);
}, 30000);


//handle submit
document.forms[0].addEventListener("submit", function () {
  let submitCheck = confirm("Do you want to continue submitting");
  if (!submitCheck) {
    event.preventDefault();
  } else {
    //to continue event
    event.composedPath();
    let userName = document.getElementById("username").value;
    alert("Welcome " + userName);
  }
});
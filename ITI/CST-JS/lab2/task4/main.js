//welcome user
alert("Welcome Sir/Madam");

//ask user for name
var userName = prompt("Please enter your name");
//check if name is not a number
if (isNaN(userName)) {
  console.log("Hello " + userName);
} else {
  while (!isNaN(userName)) {
    userName = prompt("Please enter a valid name");
    console.log("Hello " + userName);
  }
}

//ask user for phone number
var phone = prompt("Please enter your phone number");
//check if phone number is a number with 8 digits
if (phone.length == 8 && !isNaN(phone)) {
  console.log("Your phone number is " + phone);
} else {
  while (phone.length != 8 || isNaN(phone)) {
    phone = prompt("Please enter a valid phone number");
    console.log("Your phone number is " + phone);
  }
}

//ask user for mobile number
var mobile = prompt("Please enter your mobile number");
//check if mobile number is a number with 11 digits starting with 010 or 011 or 012 using regex
var regex = new RegExp("^(010|011|012)[0-9]{8}$");

if (regex.test(mobile)) {
  console.log("Your mobile number is " + mobile);
} else {
  while (!regex.test(mobile)) {
    mobile = prompt("Please enter a valid mobile number");
    console.log("Your mobile number is " + mobile);
  }
}

//ask user for email
var email = prompt("Please enter your email");
//check if email is valid using regex
var regex = new RegExp("^[a-zA-Z0-9]{2,6}+@[a-zA-Z0-9]{2,6}+.[a-zA-Z]{2,6}$");
if (regex.test(email)) {
  console.log("Your email is " + email);
} else {
  while (!regex.test(email)) {
    email = prompt("Please enter a valid email");
    console.log("Your email is " + email);
  }
}
console.log(
  "%c Thank you for using our service",
  "font-size: 20px; color: blue;"
);

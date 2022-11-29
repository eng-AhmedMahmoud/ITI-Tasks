var sum = 0;
var userInput;
do {
  //ask user for input
  userInput = +prompt("Enter a number: ");
  //check if user input is a number
  if (isNaN(userInput)) {
    alert("That is not a number!");
    userInput = prompt("Enter a number: ");
  } else {
    //calculate sum
    sum += parseInt(userInput);
  }
} while (userInput != 0 && sum <= 100);
// write sum
document.write("The sum is: " + sum);
//check if the string is palindrome or not
function palindrome() {
  var str = prompt("Enter a string");
  var caseSensitive = prompt("Case sensitive? (y/n)");
  if (caseSensitive != "y") {
    if (str != null && str != "" && str != " ") {
      var regex = new RegExp(str, "i");
      if (regex.test(str.split("").reverse().join(""))) {
        console.log("String is palindrome");
      } else console.log("String is not palindrome");
    }
  }else{
    if (str != null && str != "" && str != " ") {
      if (str == str.split("").reverse().join("")) {
        console.log("String is palindrome");
      } else console.log("String is not palindrome");
    }
  }
}
palindrome();

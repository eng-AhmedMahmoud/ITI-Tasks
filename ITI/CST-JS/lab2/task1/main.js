function strCharCount() {
  // Declare a variable to store the input string
  var str = prompt("Enter a string");
  var caseSensitive = prompt("Case sensitive? (y/n)");
  if (caseSensitive != "y") {
    if (str != null && str != "" && str != " ") {
      var regex = new RegExp(str, "i");
      var char = prompt("Enter Character you want to count");
      var count = 0;
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
          count++;
        }
      }
    }
    console.log(count);
  } else {
    if (str != null && str != "" && str != " ") {
      var char = prompt("Enter Character you want to count");
      var count = 0;
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
strCharCount();

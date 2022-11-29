//return largest word in a string
function largestWord() {
  var str = prompt("Enter a string");
  var caseSensitive = prompt("Case sensitive? (y/n)");
  if (caseSensitive != "y") {
    if (str != null && str != "" && str != " ") {
      var regex = new RegExp(str, "i");
      var strArray = str.split(" ");
      var largest = "";
      for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].length > largest.length) {
          largest = strArray[i];
        }
      }
      console.log(largest);
    }
  } else {
    if (str != null && str != "" && str != " ") {
      var strArray = str.split(" ");
      var largest = "";
      for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].length > largest.length) {
          largest = strArray[i];
        }
      }
      console.log(largest);
    }
  }
}
largestWord();
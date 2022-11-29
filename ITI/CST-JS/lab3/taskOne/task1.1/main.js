//fill array from user input
var arr = [];
var i = 0;
while (i < 5) {
  var input = prompt("Enter a number");
  arr.push(input);
  i++;
}
//print array
console.log("Numbers entered: " + arr);

//sort array ascending
arr.sort(function(a, b) {
  return a - b;
});
//print asc array
console.log("Numbers sorted ascending: " + arr);

//sort array descending
arr.sort(function(a, b) {
  return b - a;
});
//print dec array
console.log("Numbers sorted descending: " + arr);
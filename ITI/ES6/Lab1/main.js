//& Task1
//swap x and y using destructuring
let x = 1;
let y = 2;

[x, y] = [y, x];
console.log(x, y);

//& Task2
//using rest parameter and spread operator to get the max value and min value
function getMaxMin(...args) {
  console.log("min value is: " + Math.min(...args));
  console.log("max value is: " + Math.max(...args));
}
getMaxMin(1, 2, 3, 4, 5);


//& Task3
// fruits array
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// test that every element in the given array is a string
var isString = fruits.every((element) => typeof element === "string");
console.log(isString);

// .test that some of array elements starts with "a"
var startsWithA = fruits.some((element) => element.startsWith("a"));
console.log(startsWithA);

// generate new array filtered from the given array with only elements that starts with "b" or "s"
var filteredArray = fruits.filter((element) => element.startsWith("b") || element.startsWith("s"));
console.log(filteredArray);

// generate new array, each element of the new array contains a string declaring that you like the give fruit element
var likeArray = fruits.map((element) => "I like " + element);
console.log(likeArray);

//.use forEach to display all elements of the new array from previous point
likeArray.forEach((element) => console.log(element));
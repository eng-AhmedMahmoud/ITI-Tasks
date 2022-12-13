function reverse() {
  var args = Array.from(arguments).reverse();
  console.log(args);
}
reverse(1, 2);

function reverse2() {
  var args = [].slice.call(arguments).reverse();
  console.log(args);
}
reverse2(1, 2);

console.log("**************");

function twoParameters(a, b) {
  if (arguments.length !== 2) {
    throw new Error("Invalid number of parameters");
  }
  else {
    console.log(a, b);
  }
}
twoParameters(1, 2);
// twoParameters(1, 2, 3);
// twoParameters(1);

console.log("**************");

function sum() {
  var sum = 0;
  if (arguments.length === 0) {
    throw new Error("Invalid parameters");
  }
  else {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        throw new Error("Invalid parameters");
      }
      else sum += arguments[i];
    }
  }
  console.log(arguments.length);
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));
// console.log(sum());
// console.log(sum(1, 2, 3, 4, 5, "a"));


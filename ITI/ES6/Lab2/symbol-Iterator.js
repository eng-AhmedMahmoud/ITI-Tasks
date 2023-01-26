let obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
  prop4: 4,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this),
      step = 0;
    return {
      next() {
        return { value: keys[step++], done: step > keys.length };
      },
    };
  },
};

let callIterator = obj[Symbol.iterator]();

console.log(callIterator.next());
console.log(callIterator.next());
console.log(callIterator.next());
console.log(callIterator.next());
console.log(callIterator.next());

for (item of obj) {
  console.log(item);
}

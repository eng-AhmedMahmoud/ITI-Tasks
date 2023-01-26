let obj = {
  [Symbol.replace]: function (str, index) {
    if(str.length > index)
    {
      return str.substring(0, index).concat("...");
    }
    else
    {
      return str;
    }
  },
};

console.log("Continue".replace(obj, 15));
console.log("=".repeat(20))
console.log("Continue reading".replace(obj, 15));

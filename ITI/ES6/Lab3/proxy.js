/* create a dynamic object using Proxy such that it has only the
  following properties
 name property that accepts only string of 7 characters
 address property that accepts only string value
 age property that accepts numerical value between 25 and 60
*/

class Person {
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }
  Display() {
    return `Name: ${this.name}, Address: ${this.address}, Age: ${this.age}`;
  }
}

const person = new Person("John", "123 Main St", 30);
console.log(person.Display());

const personProxy = new Proxy(person, {
  set: function (target, property, value) {
    if(target.hasOwnProperty(property))
    {
      if (property === "name") {
        if (typeof value !== "string" || value.length !== 7) {
          throw new Error("Name must be a string of 7 characters");
        }
      } else if (property === "address") {
        if (typeof value !== "string") {
          throw new Error("Address must be a string");
        }
      } else if (property === "age") {
        if (typeof value !== "number" || value < 25 || value > 60) {
          throw new Error("Age must be a number between 25 and 60");
        }
      }
    }
    else
    {
      throw new Error("Property does not exist");
    }
    target[property] = value;
  }
});

personProxy.name = "Ahmeddd";
personProxy.address = "123 Main St";
personProxy.age = 30;
console.log(personProxy.Display());

personProxy.name = "Ahmeddd";
personProxy.address = 123;
personProxy.age = 20;
console.log(personProxy.Display());

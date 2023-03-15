//js loosely DT
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_address;
let x = 10; //string boolean 
// x=15;
// x = "asda";
// x = true;
// x = {};
// x = [];
// console.log(y);
let y;
// console.log(y);
y = 10;
y = 20;
// y = "asda";
let z = 5; //Type Inference ===> function add(x=0, y=0){} ===> add("ahmed", "Aly") ==> add()
z = 10;
// z = "";
let arr1;
arr1 = [];
// arr1 = [1];
let arr2;
arr2 = [2];
// arr2 = [];
let arr3;
arr3 = [];
arr3 = [5];
arr3 = [5, 7];
// arr3 = [5,7,10];
let arr4; //[] [1] [1,2]
arr4 = [];
arr4 = [5];
arr4 = [5, 7];
arr4 = [5, 7, 9];
// arr4 = [5,7,9,"", true];
let arr5;
arr5 = "asdas";
arr5 = [1, 5];
let arr6;
arr6 = [1];
arr6 = ["5asdasd"];
arr6 = ["5asdasd", 1, "asdad", 464];
let a;
a = 1;
a = "asd";
a = true;
a = {};
a = [];
let a2;
a2 = 1;
a2 = "asd";
a2 = true;
a2 = {};
a2 = [];
// let a3 = 10;
let obj1;
obj1 = {};
obj1 = { name: "Ahmed" };
let obj2;
obj2 = { name: "Ahmed" };
let arrObj;
arrObj = [];
arrObj = [{ name: "Ahmed", age: 20 }, { name: "Ahmed", age: 20 }];
// --------------------- Functions ---------------------
function Add(x = 0, y = 0) {
    return x + y + "";
}
Add(10, 5);
// Add("asdas",5);
Add();
// --------------------- Class ---------------------
class Person {
    // name:string;
    // age:number;
    // constructor(name="Person Name", age=0){
    //     Person.counter++;
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(name = "Person Name", age = 0) {
        this.name = name;
        this.age = age;
        _Person_address.set(this, "asda");
        if (this.constructor == Person) {
            Person.counter++;
        }
    }
    getName() {
        return this.name;
    }
    get Address() {
        return __classPrivateFieldGet(this, _Person_address, "f");
    }
    set Name(val) {
        this.name = val;
    }
}
_Person_address = new WeakMap();
Person.counter = 0;
let p1 = new Person(); //
let p2 = new Person("Ahmed", 20); //
// console.log(p2.coun)
console.log(Person.counter); //2
//tsc fileName.ts
/**
 * Inheritance
 * Abstract Class
 * Interface
 * */
class Employee extends Person {
    //constructor(){super()}
    constructor(name = "Employee Name", age = 20, salary = 15000) {
        super(name, age);
        this.salary = salary;
        Employee.counter++;
    }
}
Employee.counter = 0;
let e1 = new Employee(); //Employee {name:"Employee Name", age:20}
let e2 = new Employee("Ahmed", 21); //Employee {name:"Ahmed", age:21}
let e3 = new Employee();
console.log(Employee.counter);
//Abstract Class
class APerson {
    getName() {
        return this.name;
    }
}
class Employee2 extends APerson {
    getAge() {
        //throw new Error("Method not implemented.");
    }
}
class Employee3 {
    getName() {
        //throw new Error("Method not implemented.");
        return "";
    }
    getAge() {
        //throw new Error("Method not implemented.");
    }
}
class Employee4 {
    getName() {
        throw new Error("Method not implemented.");
    }
    getAge() {
        throw new Error("Method not implemented.");
    }
}

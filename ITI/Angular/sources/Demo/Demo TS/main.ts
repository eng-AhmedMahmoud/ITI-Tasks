//js loosely DT

let x:number = 10;//string boolean 
// x=15;
// x = "asda";
// x = true;
// x = {};
// x = [];
// console.log(y);
let y:number;
// console.log(y);
y = 10;
y = 20;
// y = "asda";

let z = 5;//Type Inference ===> function add(x=0, y=0){} ===> add("ahmed", "Aly") ==> add()
z = 10;
// z = "";

let arr1:[];
arr1 = [];
// arr1 = [1];

let arr2:[number];
arr2 = [2];
// arr2 = [];

let arr3:[number, number] | [] | [number];
arr3 = [];
arr3 = [5];
arr3 = [5,7];
// arr3 = [5,7,10];

let arr4: number[];//[] [1] [1,2]
arr4 = [];
arr4 = [5];
arr4 = [5,7];
arr4 = [5,7,9];
// arr4 = [5,7,9,"", true];

let arr5:(string) | (number[])
arr5 = "asdas";
arr5 = [1,5]

let arr6:(string|number)[];
arr6 = [1]
arr6 = ["5asdasd"]
arr6 = ["5asdasd",1,"asdad",464]


let a:any;
a=1;
a="asd";
a=true;
a={};
a=[];

let a2;
a2=1;
a2="asd";
a2=true;
a2={};
a2=[];

// let a3 = 10;

let obj1:{};
obj1 = {};
obj1 = {name:"Ahmed"};

let obj2:{name:string};
obj2 = {name:"Ahmed"};

let arrObj:{name:string, age:number}[];
arrObj = [];
arrObj = [{name:"Ahmed", age:20},{name:"Ahmed", age:20}];

// --------------------- Functions ---------------------
function Add(x=0,y=0):string{
    return x+y+"";
}


Add(10,5);
// Add("asdas",5);
Add();


// --------------------- Class ---------------------

class Person{
    static counter = 0;
    #address = "asda";
    // name:string;
    // age:number;
    // constructor(name="Person Name", age=0){
    //     Person.counter++;
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(public name="Person Name", public age=0){
        if(this.constructor == Person){
            Person.counter++;
        }
    }
    getName():string{ // p1.getName()
        return this.name;
    }
    get Address():string{//p1.Name
        return this.#address;
    }
    set Name(val){
        this.name = val;
    }
}

let p1 = new Person();//
let p2 = new Person("Ahmed",20);//
// console.log(p2.coun)
console.log(Person.counter);//2

//tsc fileName.ts


/**
 * Inheritance
 * Abstract Class
 * Interface
 * */

class Employee extends Person{
    static counter = 0;
    //constructor(){super()}
    constructor(name="Employee Name", age=20, public salary=15000){
        super(name, age)
        Employee.counter++;
    }

}
let e1 = new Employee();//Employee {name:"Employee Name", age:20}
let e2 = new Employee("Ahmed",21);//Employee {name:"Ahmed", age:21}
let e3 = new Employee();
console.log(Employee.counter)


//Abstract Class
abstract class APerson{
    name:string;
    age:number;
    getName(){
        return this.name;
    }
    abstract getAge();
}

class Employee2 extends APerson{
    getAge() {
        //throw new Error("Method not implemented.");
    }
    
}


class Employee3 implements APerson{
    name: string;
    age: number;
    getName(): string {
        //throw new Error("Method not implemented.");
        return ""
    }
    getAge() {
        //throw new Error("Method not implemented.");
    }
    
}


interface IPerson{
    name:string;
    age:number;
    getName();
    getAge();
}


class Employee4 implements IPerson{
    name: string;
    age: number;
    getName() {
        throw new Error("Method not implemented.");
    }
    getAge() {
        throw new Error("Method not implemented.");
    }

}
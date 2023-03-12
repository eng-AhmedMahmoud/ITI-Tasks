const validate = require("../Utils/StudentsValidations");

let Students = [];
let S_id = 0;

class StudentsClass{
    constructor(name, age, dept){
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    static AllStudents(){
        return Students;
    }
    SaveStudent(){
        if(validate(this)){
            this.id = ++S_id;
            // Students.push(newStudent);
            // res.status(201).json(newStudent);
            Students.push(this);
            return this;
        }else{
            return {err:"check ur Data Type"}
        }
        
    }
    // Update(){

    // }
    // Delete(){

    // }
}


module.exports = StudentsClass;

// var s = new StudentsClass("Ahmed",20, "AI");
// s.SaveStudent();
// // s.AllStudents();
// StudentsClass.AllStudents();
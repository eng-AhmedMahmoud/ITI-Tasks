let StudentsModel = require("../Models/StudentsModel");

let GetAllStudents = (req,res)=>{
    var Students = StudentsModel.AllStudents();
    res.status(200).json(Students);
}

let GetStudentByID = (req,res)=>{
    var ID = req.params.id;
    var foundStudent = Students.find((s)=>{return s.id == ID});//undefined
    res.status(200).json(foundStudent);
}

let AddNewStudent = (req,res)=>{
    var s = req.body //==> {name, age, dept}
    let newStudent = new StudentsModel(s.name, s.age, s.dept);
    res.json(newStudent.SaveStudent());
}

let UpdateStudent = (req,res)=>{
    let ID = req.params.id;
    let updatedStudent = req.body;
    let index ;
    Students.find((s,i)=>{
        if(s.id == ID){
            s.name = updatedStudent.name;
            s.age = updatedStudent.age;
            s.dept = updatedStudent.dept;
            index = i;
        }
    })
    // Students[index] = updatedStudent; // 

    res.status(201).json(Students[index]);
}

let DeleteStudent = (req,res)=>{
    let ID = req.params.id;
    let index;
    Students.find((s, i)=>{
        if(s.id == ID){
            index = i;
        }
    })
    Students.splice(index,1);
    res.status(200).send("Deleted Sussefully")
}


module.exports = {
    GetAllStudents,
    GetStudentByID,
    AddNewStudent,
    UpdateStudent,
    DeleteStudent
};
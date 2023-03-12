let express = require("express");
let router = express.Router();
const Cvalidate = require("../Utils/CoursesValidation");

let Courses = [];
let C_id = 0;

//#region End-Points [Courses]
//Get All Students
router.get("/",(req,res)=>{
    res.status(200).json(Courses);
})
//Get Student By ID
router.get("/:id",(req,res)=>{
    var ID = req.params.id;
    var foundCourse = Courses.find((s)=>{return s.id == ID});//undefined
    res.status(200).json(foundCourse);
})
//Add New Student
router.post("/",(req,res)=>{
    let newCourse = req.body;//{name, age, dept} ===> obj.id = 5
    newCourse.id = ++C_id;
    Courses.push(newCourse);
    res.status(201).json(newCourse);
})
//Update Student By ID
router.put("/:id",(req,res)=>{
    let ID = req.params.id;
    let updatedCourse = req.body;
    let index ;
    Courses.find((s,i)=>{
        if(s.id == ID){
            s.name = updatedCourse.name;
            s.degree = updatedCourse.degree;
            s.duration = updatedCourse.duration;
            index = i;
        }
    })
    // Courses[index] = updatedStudent; // 

    res.status(201).json(Courses[index]);
})
//Delete Student By ID
router.delete("/:id",(req,res)=>{
    let ID = req.params.id;
    let index;
    Courses.find((s, i)=>{
        if(s.id == ID){
            index = i;
        }
    })
    Courses.splice(index,1);
    res.status(200).send("Deleted Sussefully")
})

//#endregion

module.exports = router;
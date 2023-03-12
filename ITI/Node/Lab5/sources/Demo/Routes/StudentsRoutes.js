let express = require("express");
let router = express.Router();
const StudentsController = require("../Controllers/StudentsController");

//#region End-Points [Students]
//Get All Students
router.get("/",StudentsController.GetAllStudents)
//Get Student By ID
router.get("/:id",StudentsController.GetStudentByID)
//Add New Student
router.post("/",StudentsController.AddNewStudent)
//Update Student By ID
router.put("/:id",StudentsController.UpdateStudent)
//Delete Student By ID
router.delete("/:id",StudentsController.DeleteStudent)
//#endregion



module.exports = router;
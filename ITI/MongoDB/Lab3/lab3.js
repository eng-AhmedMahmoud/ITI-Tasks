//& MongoDB Lab3

// 1. Create new database named: FacultySystemV2.
// use FacultySystemV2

// 2. Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade).
db.createCollection("student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["FirstName", "LastName", "IsFired", "FacultyID", "Courses"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        FirstName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        LastName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        IsFired: {
          bsonType: "bool",
          description: "must be a bool and is required"
        },
        FacultyID: {
          bsonType: "int",
          description: "must be a int and is required"
        },
        Courses: {
          bsonType: "array",
          description: "must be a array and is required",
          items: {
            bsonType: "object",
            required: ["CourseID", "Grade"],
            properties: {
              CourseID: {
                bsonType: "int",
                description: "must be a int and is required"
              },
              Grade: {
                bsonType: "int",
                description: "must be a int and is required"
              }
            }
          }
        }
      }
    }
  }
})

//insert data
db.student.insertMany([
  {
    FirstName: "Ahmed",
    LastName: "Ali",
    IsFired: false,
    FacultyID: 1,
    Courses: [
      { CourseID: 1, Grade: 90 },
      { CourseID: 2, Grade: 80 },
      { CourseID: 3, Grade: 70 }
    ]
  },
  {
    FirstName: "Mohamed",
    LastName: "Ali",
    IsFired: false,
    FacultyID: 2,
    Courses: [
      { CourseID: 1, Grade: 90 },
      { CourseID: 2, Grade: 80 },
      { CourseID: 3, Grade: 70 }
    ]
  }
])

// 3. Create Faculty collection that has (Faculty Name, Address).
db.createCollection("faculty", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["FacultyName", "Address"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        FacultyName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        Address: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})

//insert data
db.faculty.insertMany([
  {
    FacultyName: "Faculty of Engineering",
    Address: "Cairo"
  },
  {
    FacultyName: "Faculty of Science",
    Address: "Alexandria"
  }
])

// 4. Create Course collection, which has (Course Name, Final Mark).
db.createCollection("course", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["CourseName", "FinalMark"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        CourseName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        FinalMark: {
          bsonType: "int",
          description: "must be a int and is required"
        }
      }
    }
  }
})

//insert data
db.course.insertMany([
  {
    CourseName: "Math",
    FinalMark: 100
  },
  {
    CourseName: "Physics",
    FinalMark: 100
  },
  {
    CourseName: "Chemistry",
    FinalMark: 100
  }
])

// 5. Display each student Full Name along with his average grade in all courses. $concat
db.student.aggregate([
  {
    $project: {
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      AverageGrade: { $avg: "$Courses.Grade" }
    }
  }
])

// 6. Using aggregation display the sum of final mark for all courses in Course collection.
db.course.aggregate([
  {
    $group: {
      _id: null,
      SumOfFinalMark: { $sum: "$FinalMark" }
    }
  }
])

// 7. Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object.
// Select specific student with his name, and then display his courses.
db.student.aggregate([
  {
    $match: { FirstName: "Ahmed" }
  },
  {
    $lookup: {
      from: "course",
      localField: "Courses",
      foreignField: "_id",
      as: "Courses"
    }
  }
])

// 9. Implement relation between Student and faculty by adding the faculty object in the student using _id Relation using $Lookup.
// Select specific student with his name, and then display his faculty.
db.student.aggregate([
  {
    $match: { FirstName: "Ahmed" }
  },
  {
    $lookup: {
      from: "faculty",
      localField: "FacultyID",
      foreignField: "_id",
      as: "Faculty"
    }
  }
])

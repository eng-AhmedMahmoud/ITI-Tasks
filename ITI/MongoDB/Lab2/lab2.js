//& MongoDB Lab2
let instructorsArray = [{
  _id: 10, firstName: "noha", lastName: "hesham",
  age: 27, salary: 3500,
  address: { city: "cairo", street: 10, building: 8 },
  courses: ["js", "mvc", "signalR", "expressjs"]
},

{
  _id: 11, firstName: "mona", lastName: "ahmed",
  age: 30, salary: 3600,
  address: { city: "cairo", street: 20, building: 8 },
  courses: ["es6", "mvc", "signalR", "expressjs"]
},

{
  _id: 12, firstName: "mazen", lastName: "mohammed",
  age: 23, salary: 7040,
  address: { city: "Ismailia", street: 10, building: 8 },
  courses: ["asp.net", "mvc", "EF"]
},

{
  _id: 13, firstName: "ebtesam", lastName: "hesham",
  age: 11, salary: 7500,
  address: { city: "mansoura", street: 14, building: 3 },
  courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
}


];

db.instructors.insertMany(instructorsArray)

// a - Display all documents in instructors collection
db.instructors.find()

// b - Display all instructors with salaries greater than 4000(only show firstName and salary)
db.instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1 })

// c - Display all instructors with ages less than or equal 25.
db.instructors.find({ age: { $lte: 25 } })

// d - Display all instructors with city mansoura and sreet number 10 or 14
db.instructors.find({ $and: [{ "address.city": "mansoura" }, { "address.street": { $in: [10, 14] } }] }, { firstName: 1, address: 1, salary: 1 })

// e - Display all instructors who have js and jquery in their courses(both of them not one of them).
db.instructors.find({ courses: { $all: ["js", "jquery"] } })

// f - Display number of courses for each instructor and display first name with number of courses.
db.instructors.find().forEach((ins) => {
  print(`${ins.firstName} : ${ins.courses?.length}`)
})

/*  g - Write mongodb query to get all instructors that have firstName and
 lastName properties, sort them by firstName ascending then by
 lastName descending and finally display their data FullName and age
 Note: use mongoDb sort method not javascript array method */
db.instructors.find({ firstName: { $exists: true }, lastName: { $exists: true } }, { firstName: 1, lastName: 1, age: 1 }).sort({ firstName: 1, lastName: -1 }).forEach((ins) => {
  print(`${ins.firstName} ${ins.lastName} ,age ,${ins.age}`)
  //1 BONUS: create new collection with step g values data and name it instructorsData
  db.instructorsData.insertMany({ fullname: `${ins.firstName} ${ins.lastName}` })
})

// h - Find all instructors that have fullName that contains “mohammed”.
//insert fullName property for all instructors
db.instructors.find().forEach((ins) => {
  db.instructors.updateOne({ _id: ins._id }, { $set: { fullName: `${ins.firstName} ${ins.lastName}` } })
})
db.instructors.find({ fullName: /mohammed/ })

// i - Delete instructor with first name “ebtesam” and has only 5 courses in
db.instructors.deleteOne({ firstName: "ebtesam", courses: { $size: 5 } })

// j - Add active property to all instructors and set its value to true.
db.instructors.updateMany({}, { $set: { active: true } })

// k - Change “EF” course to “jquery” for “mazen mohammed” instructor
// (without knowing EF Index)
db.instructors.updateOne({ firstName: "mazen", lastName: "mohammed", courses: "EF" }, { $set: { "courses.$": "jquery" } })

// l - Add jquery course for “noha hesham”.
db.instructors.updateOne({ firstName: "noha", lastName: "hesham" }, { $push: { courses: "jquery" } })
// db.instructors.updateOne({ firstName: "noha", lastName: "hesham" }, { $addToSet: { courses: "jquery" } })

// m - Remove courses property for “ahmed mohammed ” instructor
// insert ahmed mohammed instructor
db.instructors.insertOne({ firstName: "ahmed", lastName: "mohammed", age: 25, salary: 5000, address: { city: "mansoura", street: 10 }, courses: ["js", "EF", "mvc"] })

db.instructors.updateOne({ firstName: "ahmed", lastName: "mohammed" }, { $unset: { courses: "" } })

// n - Decrease salary by 500 for all instructors that has only 3 courses in their
// list($inc)
db.instructors.updateMany({ courses: { $size: 3 } }, { $inc: { salary: -500 } })

// o - Rename address field for all instructors to fullAddress.
db.instructors.updateMany({}, { $rename: { "address": "fullAddress" } })

// p - Change street number for noha hesham to 20
db.instructors.updateOne({ firstName: "noha", lastName: "hesham" }, { $set: { "fullAddress.street": 20 } })

//2 BONUS: create new collection with step g values data and name it instructorsData
db.instructorsData.insertMany(db.instructors.find({ firstName: { $exists: true }, lastName: { $exists: true } }, { firstName: 1, lastName: 1, age: 1 }).sort({ firstName: 1, lastName: -1 }).toArray())
db.instructorsData.find()

//create new title index for instructors collection using shell
db.instructors.createIndex({ title: 1 }, { name: "titleIndex", background: true })
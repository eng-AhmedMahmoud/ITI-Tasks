//use ITI
db.createCollection("instructors")
db.getName()
//a- Insert your own data
db.instructors.insertOne({
  _id: 500, firstName: "Ahmed", lastName: "Mahmoud",
  age: 21, salary: 3500,
  address: { city: "cairo", street: 10, building: 8 },
  courses: ["js", "mvc", "signalR", "expressjs"]
});
//- Insert instructor without firstName and LastName (mongo will raise an error or not ?)
db.instructors.insertOne({
  _id: 50,
  age: 21, salary: 3500,
  address: { city: "cairo", street: 10, building: 8 },
  courses: ["js", "mvc", "signalR", "expressjs"]
});
//         Using array contained with lab folder instructors.txt file.
db.instructors.insertMany([
  {
    _id: 6, firstName: "noha", lastName: "hesham",
    age: 21, salary: 3500,
    address: { city: "cairo", street: 10, building: 8 },
    courses: ["js", "mvc", "signalR", "expressjs"]
  },

  {
    _id: 7, firstName: "mona", lastName: "ahmed",
    age: 21, salary: 3600,
    address: { city: "cairo", street: 20, building: 8 },
    courses: ["es6", "mvc", "signalR", "expressjs"]
  },

  {
    _id: 8, firstName: "mazen", lastName: "mohammed",
    age: 21, salary: 7040,
    address: { city: "Ismailia", street: 10, building: 8 },
    courses: ["asp.net", "mvc", "EF"]
  },

  {
    _id: 9, firstName: "ebtesam", lastName: "hesham",
    age: 21, salary: 7500,
    address: { city: "mansoura", street: 14, building: 3 },
    courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
  }
])
db.instructors.find()
//- Display all instructors with fields firstName, lastName and address 
db.instructors.find({}, { firstName: 1, lastName: 1, address: 1 });
//c- Display firstName and city(not full address) for instructors with age 21.
db.instructors.find({ age: 21 }, { firstName: 1, address: { city: 1 } });
//d- Display firstName and age for instructors live in Mansoura city.
db.instructors.find({ "address.city": "Mansura" }, { firstName: 1, age: 1 });

//e- Try to run these commands
//1-db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})
// db.instructors.find({courses:"mvc"},{firstName:1,courses:1})

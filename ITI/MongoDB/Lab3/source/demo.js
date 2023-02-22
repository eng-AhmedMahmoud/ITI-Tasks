//1-create collection
//db.x.insert
db.createCollection("students", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: { bsonType: "string" },
                lastName: { bsonType: "string" },
                age: {
                    bsonType: "number", maximum: 20
                }
            }
        } //jsonSchema
    } //validator
})

//update schema after creation
db.students.runCommand("collMod", {
    validator: {
        "$jsonSchema": {
            "bsonType": "object",
            required:["firstName","lastName"],
            additionalProperties:false,
            "properties": {
                _id:{bsonType:"objectId"},
                "firstName": {
                    "bsonType": "string"
                },
                "lastName": {
                    "bsonType": "string"
                },
                "age": {
                    "bsonType": "number",
                    "maximum": 20.0
                },
                address:{
                    bsonType:"object",
                    properties:{
                        city:"cairo"
                    }
                }
            }//properties
        }//jsonSchema
    }//validator
,validationAction:"error",
validationLevel:"strict"
})




db.students.insertOne({firstName:"hesham",lastName:"Mohamed"})
db.students.updateOne({firstName:9},{$set:{age:8}})
db.students.insertOne({ firstName: 40 })
db.getCollectionInfos({ name: "students" })
typeof db.students.findOne({firstName:"sara"})


//* use Library
db.Books.aggregate([{
    $match:{Borrow:true}
},
{
    $group:{
        _id:"$Cat",
        PagesAvg:{$sum:"$Pages"}
    }
},{
    $project:{"CategoryName":"$_id",PagesAvg:1
//    FullName:{$concat:[{"$firstName", " ","$lastName"}]}
   }
    
},
{
   $out:"Agg2" 
}
])
//* use ITI
db.instructors.aggregate([{$match:{age:{$gte:21}}},{
    $group:{
        _id:{age:"$age",city:"$address.city"},
        count:{$sum:1}
    }
}])

//lookup

let depts=[{
    _id:1,
    name:"SD",
    location:"1'stFloor",
    phone:"0123456"
},
{
    _id:2,
    name:"OS",
    location:"2'stFloor",
    phone:"0123456"
}
]
db.departments.insertMany(depts);
let students=[{
    firstName:"ahmed",
    lastName:"ahmed",
    addresses:[
        {
            city:"mansoura",
            street:30
        },
        {
            city:"alex",
            street:24
        }
    ],
    department:1,
    subjects:[
    2,3
    ]
},
{
firstName:"hesham",
    lastName:"mohamed",
    addresses:[
        {
            city:"mansoura",
            street:30
        },
        {
            city:"alex",
            street:24
        }
    ],
    department:1,
    subjects:[
    2,3
    ]
}
]
db.students.insertMany(students)
db.students.find()

db.students.aggregate([{
    $lookup:{
       from:"departments" ,
       localField:"department",
       foreignField:"_id",
       as:"dept"
    }
}])


db.students.find()













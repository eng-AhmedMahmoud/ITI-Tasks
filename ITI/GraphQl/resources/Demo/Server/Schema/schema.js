const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require("graphql");

const StudentModel = require("../Models/studentsModel");
const CourseModel = require("../Models/coursesModel");

//#region Students
// let Students = [
//     {id:1,name:"Ahmed", age:20, address:"123 st", courses:["1","2"]},
//     {id:2,name:"Sara", age:23, address:"456 st", courses:["2","3"]},
//     {id:3,name:"Emad", age:24, address:"789 st", courses:["1","3"]}
// ]

const StudentType = new GraphQLObjectType({
    name:"StudentType",
    description:"Stdudent",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        address:{type:GraphQLString},
        courses:{
            type:new GraphQLList(CourseType),//
            description:"Get All Courses Per Student",
            resolve:async(parent)=>{
                // console.log(parent);//Important
                let CoursesID = parent.courses;//["2","3"]
                let FilteredCourses = [];
                let AllCourses = await CourseModel.find({})
                //For Loop Courses[{_id,__v, name, duration}] ==> coursesID ["2","3"]
                for(let i =0; i<CoursesID.length;i++){//2
                    for(let j=0; j<AllCourses.length; j++){
                        if(CoursesID[i] == AllCourses[j]._id){
                            FilteredCourses.push(AllCourses[j]);
                        }
                    }
                }
                return FilteredCourses;//XXXXXXXXX
            }
        }
    })
})
//#endregion

//#region Courses
// let Courses = [
//     {id:1, name:"JS", duration:"5 Days"},
//     {id:2, name:"JQuery", duration:"2 Days"},
//     {id:3, name:"TS", duration:"1 Day"}
// ]
let CourseType = new GraphQLObjectType({
    name:"CourseType",
    description:"Course",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        duration:{type:GraphQLString},
        students:{
            type:new GraphQLList(StudentType),
            description:"Get All Students Per Course",
            resolve:async (parent)=>{
                //Parent ==> Course:{id, name, duration}
                //For Loop Students ==> Courses[] ==> id ===> Parent.id
                let FilteredStudnets = [];

                let Students = await StudentModel.find({});
                for(let i=0; i<Students.length; i++){
                    let AllCoursesIDPerOneStudent = Students[i].courses;
                    for(let j=0; j< AllCoursesIDPerOneStudent.length; j++){
                        if(AllCoursesIDPerOneStudent[j] == parent.id){
                            FilteredStudnets.push(Students[i])
                        }
                    }
                }
                return FilteredStudnets;
            }
        }
    })
})
//#endregion

const rootQuery = new GraphQLObjectType({
    name:"RootQuery",
    description:"Get All Requests",
    fields:()=>({
        students:{
            type:new GraphQLList(StudentType), 
            description:"Get All Students",
            resolve:()=>{
                //DB
                // return Students;
                //Student.find({});
                return StudentModel.find({});
            }
        },
        student:{
            type: StudentType,
            description:"Get One Student / ID",
            args:{
                id: {type: GraphQLString}
            },
            resolve:async(parent, args)=>{
                //Find by ID ?? Students 
                let foundStudent = await StudentModel.findById(args.id) || {};
                return foundStudent;
            }
        },
        courses:{
            type:new GraphQLList(CourseType),
            description:"Get All Courses",
            resolve:()=>{
                return CourseModel.find({});
            }
        },
        course:{
            type:CourseType,
            description:"Get Course / ID",
            args:{
                id:{type:GraphQLString}
            },
            resolve:(parent, args)=>{
                return CourseModel.findById(args.id);
            }
        }
    })
})

const mutateQuery = new GraphQLObjectType({
    name:"MutationQuery",
    description:"Mutat Ur DB",
    fields:()=>({
        AddStudent:{
            type: StudentType,
            description:"Add New Student",
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)},
                courses:{type:new GraphQLList(GraphQLString)}
            },
            resolve:(parent, args)=>{
                let newStudent = new StudentModel({name:args.name, age:args.age, courses:args.courses});
                return newStudent.save();
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: mutateQuery
})


module.exports = schema;


//Get ALL Subscribed Students per Course ///----------->
//MongoDB
//Getting Only query[GET] || Mutation[POST - PUT- DELETE]

//Front [Client] [React]
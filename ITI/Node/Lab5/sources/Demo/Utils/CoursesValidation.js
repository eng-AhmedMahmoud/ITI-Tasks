const Ajv = require("ajv");
const ajv = new Ajv();

  
let CoursesSchema = {
    type:"object",
    properties:{
        name:{type:'string', pattern:"^[a-zA-Z0-9]+$"},
        degree:{type:'string',enum:["F", "G", "VG","Ex"]},
        duration:{type:'string', minLength:5}
    },
    required:["name","degree", "duration"],
    additionalProperties:false,
    // minProperties:3,
    // maxProperties:3
}
module.exports = ajv.compile(CoursesSchema);
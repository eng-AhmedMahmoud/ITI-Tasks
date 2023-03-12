const Ajv = require("ajv");
const ajv = new Ajv();

let StudentsSchema = {
    type:"object",
    properties:{
        name:{type:'string', pattern:"^[a-zA-Z]+$"},
        age:{type:'number',minimum:20, maximum:40},
        dept:{type:'string',enum:["SD","UI","AI"], minLength:2, maxLength:2}
    },
    required:["name","age", "dept"],
    additionalProperties:false,
    // minProperties:3,
    // maxProperties:3
}

module.exports = ajv.compile(StudentsSchema);
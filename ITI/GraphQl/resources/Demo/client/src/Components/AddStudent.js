import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

let MutationAddStudentQuery = gql`
                            mutation($name:String!, $age:Int!){
                                AddStudent(name:$name, age:$age){
                                    name
                                    age
                                }
                            }
`;

const GetAllStudentsQuery = gql`
{
    students{
        id
        name
        age
        courses{
            name
        }
    }
}
`;


function AddStudent(){
    let Students = useQuery(GetAllStudentsQuery);
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);

    let [saveNow, {error, data}] = useMutation(MutationAddStudentQuery,{
        variables:{
            name:name,
            age:+age
        },
        refetchQueries:[{query:GetAllStudentsQuery}]
    })

    let SubmitingForm = (e)=>{
        e.preventDefault();
        let newStudent = {name, age};
        saveNow();
    }

    return(
        <div className="m-2">
            <h1 className="alert alert-secondary w-50 m-auto text-center mb-2 mt-2">Add New Student</h1>
            <form 
                className="form"
                onSubmit={SubmitingForm}
            >
                <div className="m-1 form-group d-flex justify-content-center">
                    <label className="col-3">Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onInput={(e)=>{setName(e.target.value)}}
                    />
                </div>
                <div className="m-1 form-group d-flex justify-content-center">
                    <label className="col-3">Age: </label>
                    <input 
                        type="number"
                        className="form-control"
                        onInput={(e)=>{setAge(e.target.value)}}
                    />
                </div>
                <div className="m-1 form-group d-flex justify-content-center">
                    <input 
                        type="submit"
                        className="btn btn-outline-success"
                    />
                </div>
            </form>
        </div>
    )
}

export default AddStudent;
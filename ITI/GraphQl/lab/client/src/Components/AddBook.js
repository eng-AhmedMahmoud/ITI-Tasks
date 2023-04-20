import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

let addbookquery = gql`
                            mutation($name:String!, $author:String! , $NumOfPages:String!){
                                AddBook(name:$name, author:$author , NumOfPages:$NumOfPages){
                                    name
                                    author
                                    NumOfPages
                                }
                            }
`;

const getallbooksquery = gql`
{
        books{
            name
            author
            NumOfPages
            
        }
}
`;


function AddBook(){
    let Students = useQuery(getallbooksquery);
    let [name, setName] = useState("");
    let [author, setauthor] = useState("");
    let [NumOfPages, setaNumOfPages] = useState("");


    let [saveNow, {error, data}] = useMutation(addbookquery,{
        variables:{
            name:name,
            author:author,
            NumOfPages:NumOfPages
        },
        refetchQueries:[{query:getallbooksquery}]
    })

    let SubmitingForm = (e)=>{
        e.preventDefault();
        saveNow();
    }

    return(
        <div className="m-2">
            <h1 className="alert alert-secondary w-50 m-auto text-center mb-2 mt-2">Add New book</h1>
            <form 
                className="form"
                onSubmit={SubmitingForm}
            >
                <div className="m-1 form-group d-flex justify-content-center">
                    <input 
                        type="text"
                        className="form-control"
                        onInput={(e)=>{setName(e.target.value)}}
                    />
                </div>
                <div className="m-1 form-group d-flex justify-content-center">
                    <input 
                        type="text"
                        className="form-control"
                        onInput={(e)=>{setauthor(e.target.value)}}
                    />
                </div>
                <div className="m-1 form-group d-flex justify-content-center">
                    <input 
                        type="text"
                        className="form-control"
                        onInput={(e)=>{setaNumOfPages(e.target.value)}}
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

export default AddBook;
import {Component} from 'react';
import { ApolloClient, gql , InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri:"http://localhost:7000/graphql",
    cache:new InMemoryCache()
  })

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


class Students extends Component{
    constructor(){
        super();
        this.state={
            AllStudents:[]
        }
    }
    RenderStudents = ()=>{
        if(this.state.AllStudents.length){
            return this.state.AllStudents.map((student)=>{
                return (
                    <div className='alert alert-primary m-auto w-75 text-center' key={student.id}>
                        <h5>Name: {student.name}</h5>
                        <h5>Courses: {student.courses.length}</h5>
                    </div>
                )
            })
        }else{
            return(
                <div>
                    Loading...
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                <h1 className='alert alert-secondary w-50 m-auto text-center mb-2'>Students</h1>
                {this.RenderStudents()}
            </div>
        )
    }
    componentDidMount(){
        //Fetch API
        client.query({
            query:GetAllStudentsQuery
        }).then((stds)=>{
            //console.log(stds.data.students)
            this.setState({AllStudents:stds.data.students});
        })
    }
}

export default Students;




/**
 * 1- gql Query {students{name}}
 * 2- Connect With Link
 */
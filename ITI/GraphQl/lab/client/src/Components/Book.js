import {Component} from 'react';
import { ApolloClient, gql , InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri:"http://localhost:8215/graphql",
    cache:new InMemoryCache()
  })

  const query = gql`
                                    {
                                        books{
                                            id
                                            name
                                            author
                                            NumOfPages
                                            
                                        }
                                    }
  `;


class Book extends Component{
    constructor(){
        super();
        this.state={
            allBooks:[]
        }
    }
    RenderStudents = ()=>{
        if(this.state.allBooks.length){
            return this.state.allBooks.map((student)=>{
                return (
                    <div className='alert alert-primary m-auto w-75 text-center' key={student.id}>
                        <h5>Name: {student.name}</h5>
                        <h5>Age: {student.author}</h5>
                        
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
                <h1 className='alert alert-secondary w-50 m-auto text-center mb-2'>books</h1>
                {this.RenderStudents()}
            </div>
        )
    }
    componentDidMount(){
        //Fetch API
        client.query({
            query:query
        }).then((stds)=>{
            //console.log(stds.data.students)
          //  console.log(stds.data.authores                )
            this.setState({allBooks:stds.data.books});
        })
    }
}

export default Book;




/**
 * 1- gql Query {students{name}}
 * 2- Connect With Link
 */
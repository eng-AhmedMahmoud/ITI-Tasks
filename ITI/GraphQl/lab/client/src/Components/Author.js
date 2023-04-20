import {Component} from 'react';
import { ApolloClient, gql , InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri:"http://localhost:8215/graphql",
    cache:new InMemoryCache()
  })

  const quey = gql`
                                    {
                                        authores{
                                            id
                                            name
                                            age
                                            books{
                                                id
                                            }
                                            
                                        }
                                    }
  `;


class Author extends Component{
    constructor(){
        super();
        this.state={
            allAuthors:[]
        }
    }
    RenderStudents = ()=>{
        if(this.state.allAuthors.length){
            return this.state.allAuthors.map((author)=>{
                return (
                    <div className='alert alert-primary m-auto w-75 text-center' key={author.id}>
                        <h5>Name: {author.name}</h5>
                        <h5>Age: {author.age}</h5>
                        <h5>books: {author.books.length}</h5>
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
                <h1 className='alert alert-secondary w-50 m-auto text-center mb-2'>authores</h1>
                {this.RenderStudents()}
            </div>
        )
    }
    componentDidMount(){
        //Fetch API
        client.query({
            query:quey
        }).then((stds)=>{
            //console.log(stds.data.students)
          //  console.log(stds.data.authores                )
            this.setState({allAuthors:stds.data.authores});
        })
    }
}

export default Author;




/**
 * 1- gql Query {students{name}}
 * 2- Connect With Link
 */
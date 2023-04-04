import { Component } from "react";
import axios from 'axios';
class Task extends Component{
    constructor(){
        super();
        this.state={task:null}
        console.log("constructor");
    }
componentDidMount(){
    // 1'st way
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => this.setState({task:json}))

    // 2nd way
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>this.setState({task:res.data}));
    console.log("componentDidMount")
}
shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
}
componentDidUpdate(){
    console.log("componentDidUpdate");
}
    //state={task:"react"} //syntax sugar
render(){
    const handleClick=(e)=>{
    //    this.setState({task:{...this.state.task,isDone:true}})
    this.setState((oldState)=>{return({task:{...oldState.task,completed:true}})});
    }
    console.log("render");
// onclick="alert()"
const imggg="Images/1.jpg";
    if (!this.state.task) return<div>loading ....</div>
    return <div>
        <img src={imggg} alt="img"/>
         Task , {this.state.task.title},{this.state.task.completed?" Done":" inprogress"} <button onClick={handleClick}>change</button></div>
}
}
export default Task;
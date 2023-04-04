import { Component } from "react";

class Task extends Component{
    constructor(){
        super();
        this.state={task:"react"}
    }
    //state={task:"react"} //syntax sugar
render(){
    return <div>Task , {this.state.task}</div>
}
}
export default Task;
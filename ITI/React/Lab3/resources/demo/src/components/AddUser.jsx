import {useState} from 'react';
import classes from '../styles/AddUser.module.css'
import Button from '@mui/material/Button';
const AddUser = ({Add}) => {
    
    // console.log(Add);
    const [newData, setNewData] = useState({name:"aya",age:"4"});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        
        setNewData({...newData,[name]:value}); //computed property
// console.log(value ,name )
// console.log(newData)
    }

    const handleSubmit=(e)=>{
e.preventDefault();
Add(newData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" name="name" value={newData.name} onChange={handleChange}></input>
                <br></br>
                age : <input type="number" name="age" value={newData.age} onChange={handleChange}></input>
                <br></br>
                {/* age : <input type="txt" name="email" value="jnjnj" onChange={handleChange}></input> */}
                <input className={classes.btn} type="submit"></input>
                <Button variant="contained">Done</Button>
            </form>
        </div>
    );
};

export default AddUser;
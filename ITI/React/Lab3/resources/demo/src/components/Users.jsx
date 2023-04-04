import {useState} from 'react';
import User from './User';
import {v4 as uuid} from "uuid";
import AddUser from './AddUser';
const Users = () => {
     const [usersArr,setUsers]= useState([
        {id:uuid(),name:'ashraf', age:24},
        {id:uuid(),name:'ahmed', age:26},
        {id:uuid(),name:'sara', age:30},
        {id:uuid(),name:'ganna', age:34},
        {id:uuid(),name:'ayman', age:11}
     ]);

     const addUser=(newUser)=>{
        setUsers([...usersArr,{...newUser,id:uuid(),age:+(newUser.age)}])
        // console.log(newUser)
     }
     
     const IncAge=(userId)=>{
    //    const usrIdx=usersArr.findIndex((u)=>u.id===userId);
    //    usersArr[usrIdx]={...usersArr[usrIdx],age:usersArr[usrIdx].age+1};
    //    setUsers([...usersArr]);

    setUsers((oldUsers)=>oldUsers.map((u)=>u.id===userId?{...u,age:u.age+1}:{...u}));
    //  console.log(usersArr);
     }
    return (
        <div>
            <AddUser Add={addUser}></AddUser>
         {usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age} IncrementAge={IncAge} ><button>dooo</button></User>)}
        </div>
    );
};

export default Users;
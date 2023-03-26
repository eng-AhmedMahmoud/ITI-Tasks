import {useState} from 'react';
import User from './User';
import {v4 as uuid} from "uuid";
const Users = () => {
     const [usersArr]= useState([
        {id:uuid(),name:'ashraf', age:24},
        {id:uuid(),name:'ahmed', age:26},
        {id:uuid(),name:'sara', age:30},
        {id:uuid(),name:'ganna', age:34},
        {id:uuid(),name:'ayman', age:11}
     ]);
     console.log(usersArr);
    return (
        <div>
         {usersArr.map((u)=><User key={u.id} {...u}  ></User>)}
        </div>
    );
};

export default Users;
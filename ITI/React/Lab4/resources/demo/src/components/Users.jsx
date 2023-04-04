import {useState,useEffect, useCallback, useLayoutEffect, useMemo} from 'react';
import  axios from "axios";
import User from './User';
import {v4 as uuid} from "uuid";
import AddUser from './AddUser';
import UseTimer from '../hooks/timer';
const Users = () => {
   // 
     const [usersArr,setUsers]= useState([
         {id:uuid(),name:'ashraf', age:24},
         {id:uuid(),name:'ahmed', age:26},
         {id:uuid(),name:'sara', age:30},
         {id:uuid(),name:'ganna', age:34},
         {id:uuid(),name:'ayman', age:11}
      ]);

     const [counter, setCounter]=useState(0);
     const [ disable,setDisabled]=useState(false);

     const addUser=useCallback((newUser)=>{
        setUsers([...usersArr,{...newUser,id:uuid(),age:+(newUser.age)}])
     
        setCounter((oldCounter)=> oldCounter+1)
        if (counter >=3)
        setDisabled(true);

        // console.log(newUser)
     },[counter,usersArr])
     
     const IncAge=useCallback((userId)=>{
    //    const usrIdx=usersArr.findIndex((u)=>u.id===userId);
    //    usersArr[usrIdx]={...usersArr[usrIdx],age:usersArr[usrIdx].age+1};
    //    setUsers([...usersArr]);

    setUsers((oldUsers)=>oldUsers.map((u)=>u.id===userId?{...u,age:u.age+1}:{...u}));
    //  console.log(usersArr);
     },[]);
//1-componentDidMount , componentDidUpdate
// useEffect(() => { console.log("inside useEffect")});

// 2-componentDidMount
// useEffect(() => { console.log("inside useEffect")},[]);

// 3-componentDidMount , componentDidUpdate(counter)
// useEffect(() => { console.log("inside useEffect")},[counter]);


// 1-simulate UnMount
// useEffect(()=>{console.log("inside useEffect");
// return ()=>{
//    console.log("simulate UnMount")
// }
// },[])


//1-componentDidMount , componentDidUpdate
// useEffect(()=>{
// return ()=>{
//    console.log("cleanUp")
// }
// })

// useLayoutEffect

// useEffect(() => { 
//    axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((res)=>setUsers(res.data));
//     console.log("componentDidMount")
// },[]);

const adults= useMemo(()=>usersArr.filter((u)=>{
   console.log("heavy operation")
   return u.age>18}).length,[usersArr]);


const [timer,dec,Reset]=useCallback(UseTimer(),[]);



     return (
      
        <div> 
         <div>timer:{timer}
<button onClick={dec}>Dec</button>
<button onClick={Reset}>Reset</button>

         </div>
         Adults: {adults}
         <div>Counter :{counter}</div>

            
         {usersArr?usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age} IncrementAge={IncAge} ><button>dooo</button></User>)
         :<div>Loaading .....</div>}
        </div>
    );
};

export default Users;
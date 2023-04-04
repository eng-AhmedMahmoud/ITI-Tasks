import {useCallback, useState} from 'react'

const UseTimer = (initialTime=20) => {
const [timer, setTimer] = useState(initialTime);
console.log("custome hook");
const decrement= useCallback(()=>{
    setTimer ((oldTime)=>oldTime-1);

},[])
const reset=useCallback(()=>{
    setTimer(initialTime)
},[initialTime])
    return [timer,decrement,reset];
};

export default UseTimer;
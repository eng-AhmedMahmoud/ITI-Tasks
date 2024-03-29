import Types from 'prop-types';
import RecipeReviewCard from "./Card.jsx";
import classes from '../styles/User.module.css'
import { memo } from 'react';
const obj={backgroundColor:"violet" , width:'70%' , margin:"15px auto"};
const User=(props)=>{
    // console.log(props);
   const {id,name,age,IncrementAge}=props;

const handleClick=()=>{
  IncrementAge(id);
}
return <div className={classes.user}>
<div>id:{id}</div>
{/* <div>name:{name?name:"ayat"}</div> */}
<div>name:{name||"ayat"}</div>
{age&&<div>age:{age}</div> }
{/* <div>age:{age}</div>   */}
{/* <div>{children}</div> */}
<button className={classes.btn} onClick={handleClick}>Inc Age</button>
</ div> 
{/* <RecipeReviewCard {...props}></RecipeReviewCard> */}



}

User.propTypes={
  id:Types.string.isRequired,
  name:Types.string,
  age:Types.number
}
// User.defaultProps={
//   name:"Omar",
//   age:19
// }
export default memo(User);
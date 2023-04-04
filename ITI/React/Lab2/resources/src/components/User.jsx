import Types from 'prop-types'
import { memo } from 'react';
const obj={backgroundColor:"violet" , width:'70%' , margin:"15px auto"};
const User=(props)=>{
  //  console.log(props);
   const {id,name,age}=props;

return <div style={obj}>
  <div>id:{id}</div>
  {/* <div>name:{name?name:"ayat"}</div> */}
  <div>name:{name||"ayat"}</div>
  {age&&<div>age:{age}</div> }
  {/* <div>age:{age}</div>   */}
  {/* <div>{children}</div> */}
</ div>
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
const obj={backgroundColor:"violet" , width:'70%' , margin:"15px auto"};
const User=(props)=>{
   console.log(props);
   const {id,name,age}=props;

return <div style={obj}>
  <div>id:{id}</div>
  <div>name:{name}</div>
  <div>age:{age}</div>  
</ div>
}



export default User;
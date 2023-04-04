// jsx
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Root from "../components/componentsinteraction/Root";
import Task from "../Pages/TaskPage";

import Users from "../components/Users";
import Home from "../Pages/Home";
import UsersPage from "../Pages/Users";
import "./App.css";
import UserDetails from "../Pages/UserDetails";
import AddUserPage from "../Pages/AddUserPage";
import NotFound from "../Pages/NotFound";
import NavBar from "../components/NavBar";
// const name = "ui";
// const styleObj={backgroundColor:"red"}
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="users" element={<UsersPage/>} ></Route>
        <Route path="task" element={<Task></Task>} ></Route>
        <Route path="users/add" element={<AddUserPage/>} ></Route>

        <Route path="users/:id" element={<UserDetails></UserDetails>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>




      </Routes>
      </BrowserRouter>

       {/* <Task></Task> */}
      {/* <Users></Users> */}
      {/* <Root></Root> */}
    
   
    </div>
    // <>
    // <label htmlFor="n11">Name</label>
    // <input id="n11"></input>
    //   <div style={{backgroundColor:"red"}} >Hello , {name.toUpperCase()}</div>
    //   <div className="App">Hi , {name.toUpperCase()}</div>
    //   </>
  );
}

// 1-start js ,, html in return

export default App;

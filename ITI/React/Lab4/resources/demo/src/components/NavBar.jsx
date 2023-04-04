import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div style={{backgroundColor:"pink",display:"flex",justifyContent:"space-evenly"}}>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users/add'>Add new User</Link>
            <Link to='/task'>task</Link>
        </div>
    );
};

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
  return (
    <div class="bg-dark text-white d-flex justify-content-center p-2">
      <Link class="nav-link m-2 mx-5" to="/">Home</Link>
      <Link class="nav-link m-2 mx-5" to="/about">About</Link>
    </div>
  );
};

export default NavBar;

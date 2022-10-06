import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar narbar-expand-lg navbar-dark bg-dark py-2 ">
      <Link to="/" className="navbar-brand ml-5">
        Student
      </Link>
    </nav>
  );
};

export default NavBar;

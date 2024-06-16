import React from "react";
import NavItem from "../NavItem/NavItem.js";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <NavItem to="/login" text="Login" />
        <NavItem to="/register" text="Register" />
      </ul>
      <LoginForm />
      <RegisterForm />
    </nav>
  );
}

export default Navbar;

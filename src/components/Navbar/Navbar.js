import React from "react";
import NavItem from "../NavItem/NavItem.js";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./Navbar.scss";
import React from "react";
import NavItem from "../NavItem/NavItem.js";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <Logo />
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavigationLinks />
        <SearchForm />
        <LoginRegisterDropdown />
        <UserAccount />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import NavItem from "../NavItem/NavItem.js";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      {/* Your logo */}
      <img className="navbar-brand" src="images/logo.png" alt="logo" />
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navbar links */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavItem href="index.html">Home</NavItem>
          <NavItem href="./html/gamesList.html">Browse All Games</NavItem>
          {/* Search form */}
          <li className="nav-item">
            <form className="form-inline" id="searchForm">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  id="searchInput"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn cta-btn ml-2"
                    id="searchButton"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Search results container */}
              <div id="searchResultsContainer" style={{ display: "none" }}>
                <datalist id="searchResults"></datalist>
              </div>
            </form>
          </li>

          {/* Log In / Register dropdown */}
          <li className="nav-item dropdown" id="logInRegister">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Log In / Register
            </a>
            <div className="dropdown-menu" aria-labelledby="logInRegister">
              <LoginForm />
              <RegisterForm />
            </div>
          </li>
          {/* My Account (displayed when logged in) */}
          <li className="nav-item" id="myAccount" style={{ display: "none" }}>
            <div id="sessionContainer"></div>
          </li>
          {/* Log Out button (displayed when logged in) */}
          <li className="nav-item" id="logOut" style={{ display: "none" }}>
            <form id="logout-form" method="POST">
              <button type="submit" className="btn cta-btn" id="logOutButton">
                Log Out
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

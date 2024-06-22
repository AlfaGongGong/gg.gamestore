import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";
import "./Navbar.scss";

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginToggle = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };

  const handleRegisterToggle = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchInput === "") {
      setSearchResults([]);
      return;
    } else {
      axios
        .get(`/search?search=${searchInput}`)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    setSearchInput("");
  };

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input === "") {
      setSearchResults([]);
      return;
    }

    axios
      .get(`/search?search=${input}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-games" className="nav-link">
              Browse Games
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all-accessories" className="nav-link">
              Browse Accessories
            </Link>
          </li>
          <li className="nav-item search-container">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search for game or accessory"
                className="search-input"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button type="submit" className="search-button">
                Search
              </button>

              {searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map((result) => (
                    <div key={result.id} className="search-item">
                      <img src={result.image} alt={result.name} />
                      <p>{result.name}</p>
                      <span>${result.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </li>

          <li className="nav-item dropdown-container">
            <button onClick={handleLoginToggle}>
              {showLoginForm ? "Register" : "Log In"}
            </button>
            <div
              className={`dropdown ${showLoginForm ? "login-form" : ""} ${
                showRegisterForm ? "register-form" : ""
              }`}
            >
              {showLoginForm && <LoginForm />}
              {showRegisterForm && <RegisterForm />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

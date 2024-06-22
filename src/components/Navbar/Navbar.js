import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios.js";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./Navbar.scss";

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLoginToggle = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterToggle = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-games">Browse Games</Link>
        </li>
        <li>
          <Link to="/all-accessories">Browse Accessories</Link>
        </li>
        <li className="search-container">
          <input
            type="text"
            placeholder="Search for game or accessory"
            value={searchInput}
            onChange={handleSearchInput}
          />
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
        </li>
        <li>
          {showLoginForm && <button onClick={handleLoginToggle}>Log In</button>}
          {showRegisterForm && <RegisterForm />}
          {!showLoginForm && (
            <span>
              Not registered?{" "}
              <button onClick={handleRegisterToggle}>Register</button>
            </span>
          )}
        </li>
      </ul>
      {showLoginForm && <LoginForm />}
    </div>
  );
};

export default Navbar;

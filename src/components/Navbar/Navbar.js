import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios.js";
import LoginForm from "../LoginForm/LoginForm.js";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./Navbar.scss";

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
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

    console.log(searchInput);

    console.log(searchResults);
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
                <img key={result.id} src={result.image} alt={result.name} />
              ))}
            </div>
          )}
        </li>
        <li>
          <button onClick={handleLoginToggle}>Log In</button>
        </li>
        <li>
          <button onClick={handleRegisterToggle}>Register</button>
        </li>
      </ul>
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import axios from "../../axios.js";
import "./LoginForm.scss";

const handleLogin = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", { username, password });

    console.log("Logged in successfully:", response.data);

    localStorage.setItem("token", response.data.token);

    <Link to="/home" />;
  } catch (error) {
    console.error("Error logging in:", error);

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid credentials. Please try again.";
    errorMessage.style.color = "red";
    document.getElementById("login-form").appendChild(errorMessage);
  }
};

const LoginForm = () => (
  <form
    id="login-form"
    className="dropdown-item"
    method="POST"
    onSubmit={(event) => {
      event.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
      handleLogin(username, password);
    }}
  >
    <h2>Log in</h2>
    <input
      type="text"
      placeholder="Username"
      id="login-username"
      name="username"
      required
    />
    <input
      type="password"
      placeholder="Password"
      id="login-password"
      name="password"
      required
    />
    <button type="submit" className="btn cta-btn" id="login-btn">
      Login
    </button>
  </form>
);

export default LoginForm;

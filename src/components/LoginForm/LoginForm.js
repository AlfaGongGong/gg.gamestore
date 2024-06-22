import React, { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm.js";

import "./LoginForm.scss";

import axios from "../../axios.js";

const LoginForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLoginToggle = () => {
    toggleForm();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    try {
      const response = await axios.post("/auth/login", { username, password });

      console.log("Logged in successfully:", response.data);

      localStorage.setItem("token", response.data.token);

      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in:", error);

      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Invalid credentials. Please try again.";
      errorMessage.style.color = "red";
      document.getElementById("login-form").appendChild(errorMessage);
    }
  };

  return (
    <div>
      {showLoginForm ? (
        <form
          id="login-form"
          className="dropdown-item"
          method="POST"
          onSubmit={handleLogin}
        >
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
          <label>
            Don't have an account?{" "}
            <a href="#" onClick={handleLoginToggle}>
              Register
            </a>
          </label>
        </form>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};

export default LoginForm;

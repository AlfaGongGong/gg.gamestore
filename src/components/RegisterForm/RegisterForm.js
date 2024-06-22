import React, { useState } from "react";
import "./RegisterForm.scss";

import axios from "../../axios.js";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("/auth/register", {
        username,
        password,
      });

      console.log("Registered successfully:", response.data);

      localStorage.setItem("token", response.data.token);

      window.location.href = "/";
    } catch (error) {
      console.error("Error registering:", error);

      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Registration failed. Please try again.";
      errorMessage.style.color = "red";
      document.getElementById("register-form").appendChild(errorMessage);
    }
  };

  return (
    <form
      id="register-form"
      className="dropdown-item"
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();
        handleRegister();
      }}
    >
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        id="register-username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        id="register-password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit" className="btn cta-btn" id="register-btn">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

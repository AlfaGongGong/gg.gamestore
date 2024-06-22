import React, { useState } from "react";
import "./RegisterForm.scss";

import axios from "../../axios.js";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleRegister = async () => {
    try {
      if (password !== passwordRepeat) {
        throw new Error("Passwords do not match");
      }

      const response = await axios.post("/auth/register", {
        username,
        email,
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
        type="email"
        placeholder="Email"
        id="register-email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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
      <input
        type="password"
        placeholder="Repeat Password"
        id="register-password-repeat"
        name="password-repeat"
        value={passwordRepeat}
        onChange={(event) => setPasswordRepeat(event.target.value)}
        required
      />
      <button type="submit" className="btn cta-btn" id="register-btn">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

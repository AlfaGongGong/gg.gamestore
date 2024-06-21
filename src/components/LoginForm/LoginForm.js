import React from "react";
import { Link } from "react-router-dom";

import axios from "../../axios.js";
import "./LoginForm.scss";

/**
 * @description Post request to the server to authenticate a username and password,
 * storing the response token in local storage for later use in fetching data from
 * an API endpoint.
 * 
 * @param { string } username - login credentials of a user to be authenticated.
 * 
 * @param { string } password - user's login password, which is passed to the
 * `axios.post()` method to authenticate the user and return an authorization token
 * in the response.
 */
const handleLogin = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", { username, password });
    // Handle successful login
    console.log("Logged in successfully:", response.data);

    // Save the token to local storage
    localStorage.setItem("token", response.data.token);

    // Redirect to the home page
    <Link to="/home" />;
  } catch (error) {
    // Handle error
    console.error("Error logging in:", error);

    // Display error message
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid credentials. Please try again.";
    errorMessage.style.color = "red";
    document.getElementById("login-form").appendChild(errorMessage);
  }
};

/**
 * @description Is used to login an user by entering username and password. It prevents
 * the form from being submitted by default, allows users to input their credentials,
 * and calls the `handleLogin` function when the login button is clicked.
 * 
 * @returns { event } a HTML form with login fields and a submit button.
 * 
 * 	* `id`: The `id` attribute is set to "login-form", which is the identifier for
 * the form element.
 * 	* `className`: The `className` attribute is set to "dropdown-item", indicating
 * that this form is a dropdown item in the login menu.
 * 	* `method`: The `method` attribute is set to `"POST"`; this indicates that the
 * form will send a POST request when submitted.
 * 	* `onSubmit`: The `onSubmit` event listener is defined and sets `event.preventDefault();`,
 * preventing the default form submission behavior. Then, it calls the `handleLogin()`
 * function with the username and password values as arguments.
 * 	* `<h2>Log in</h2>`: This is a headline element that displays the text "Log in"
 * inside the form.
 * 	* `<input>` elements: Two input elements are created to collect the username and
 * password inputs from the user. Each input has an ID, name, placeholder text, and
 * `required` attribute set to true. The ID of each input is used to access its value
 * later in the `handleLogin()` function.
 */
/**
 * @description Allows users to log in by entering their username and password, then
 * submitting the form for processing.
 * 
 * @param { string } id - id of the form element, which is used to identify and
 * manipulate the form instance in JavaScript code.
 * 
 * @param { string } className - CSS class to be applied to the login form element.
 * 
 * @param { string } method - "POST" method for the form submission, preventing the
 * default form submission behavior and allowing the login functionality to take place.
 * 
 * @param { event. } onSubmit - event object that is triggered when the form is
 * submitted, and it prevents the default form submission behavior by calling the
 * `preventDefault()` method.
 * 
 * 	1/ `method`: String (Post)
 * 	The HTTP method for the form's submission.
 * 	2/ `event`: Object
 * 	Represents a JavaScript event that occurs when the user submits the form.
 * 	3/ `preventDefault`: Function (non-empty)
 * 	Prevents the default behavior of the form's submission, which is to navigate to
 * the target URL.
 * 	4/ `username`: String (non-empty)
 * 	The value entered in the `<input>` element with the id "login-username".
 * 	5/ `password`: String (non-empty)
 * 	The value entered in the `<input>` element with the id "login-password".
 * 	6/ `handleLogin`: Function (non-empty)
 * 	A function that will be called when the form is submitted, taking the `username`
 * and `password` values as arguments.
 */
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

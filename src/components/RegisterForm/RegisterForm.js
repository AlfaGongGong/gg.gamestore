<<<<<<< HEAD
import axios from "../../axios.js";

const handleRegister = async (username, password) => {
  try {
    const response = await axios.post("/auth/register", { username, password });
    // Handle successful registration
    console.log("Registered successfully:", response.data);

    // Save the token to local storage
    localStorage.setItem("token", response.data.token);

    // Redirect to the home page
    window.location.href = "/";
  } catch (error) {
    // Handle error
    console.error("Error registering:", error);

    // Display error message
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Registration failed. Please try again.";
    errorMessage.style.color = "red";
    document.getElementById("register-form").appendChild(errorMessage);
  }
};

const RegisterForm = () => (
  <form
    id="register-form"
    className="dropdown-item"
    method="POST"
    onSubmit={(event) => {
      event.preventDefault();
      const username = document.getElementById("register-username").value;
      const password = document.getElementById("register-password").value;
      handleRegister(username, password);
    }}
  >
    <h2>Register</h2>
    <input
      type="text"
      placeholder="Username"
      id="register-username"
      name="username"
      required
    />
    <input
      type="password"
      placeholder="Password"
      id="register-password"
      name="password"
      required
    />
=======
const RegisterForm = () => (
  <form id="register-form" className="dropdown-item" method="POST">
    <h2>Register</h2>
    {/* Other input fields */}
    {/* ... */}
>>>>>>> 1a0e8a70e20dd0caaab108cd97413b29958a5d82
    <button type="submit" className="btn cta-btn" id="register-btn">
      Register
    </button>
  </form>
);

export default RegisterForm;

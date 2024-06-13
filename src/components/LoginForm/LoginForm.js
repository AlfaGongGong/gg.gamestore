const LoginForm = () => (
  <form id="login-form" className="dropdown-item" method="POST">
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

import React from "react";

import "./Login.css";
import logo from "../../img/ig-logo.png";

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Instagram Logo" />
      <form className="login-form">
        <input
          type="text"
          name="usernameInput"
          placeholder="Enter username..."
        />
        <input
          type="password"
          name="passwordInput"
          placeholder="Enter password..."
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import PropTypes from "prop-types";

import "./Login.css";
import logo from "../../img/ig-logo.png";

const Login = props => {
  return (
    <div className="login-container">
      <img src={logo} alt="Instagram Logo" />
      <form onSubmit={props.handleLogin} className="login-form">
        <input
          type="text"
          name="usernameInput"
          placeholder="Enter username..."
          value={props.usernameInput}
          onChange={props.handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="passwordInput"
          placeholder="Enter password..."
          value={props.passwordInput}
          onChange={props.handleChange}
          autoComplete="off"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func,
  handleLogin: PropTypes.func,
  usernameInput: PropTypes.string,
  passwordInput: PropTypes.string
};

export default Login;

import React from "react";

import LoginContainer from "../Styles/Reusables/LoginContainer";

import logo from "../../img/ig-logo.png";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    localStorage.setItem("username", this.state.usernameInput);
    // window.location.reload();
  };

  render() {
    return (
      <LoginContainer>
        <img src={logo} alt="Instagram Logo" />
        <form onSubmit={this.handleLogin} className="login-form">
          <input
            type="text"
            name="usernameInput"
            placeholder="Enter username..."
            value={this.state.usernameInput}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <input
            type="password"
            name="passwordInput"
            placeholder="Enter password..."
            value={this.state.passwordInput}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <button>Login</button>
        </form>
      </LoginContainer>
    );
  }
}

export default Login;

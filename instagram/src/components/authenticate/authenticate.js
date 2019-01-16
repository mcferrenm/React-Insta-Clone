import React from "react";

const authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isUserLoggedin: false,
        usernameInput: "",
        passwordInput: ""
      };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleLogin = () => {
      localStorage.setItem("username", this.state.usernameInput);
    };

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ isUserLoggedin: true });
      }
    }
    render() {
      if (this.state.isUserLoggedin) {
        return <App />;
      }
      return (
        <Login
          handleLogin={this.handleLogin}
          usernameInput={this.state.usernameInput}
          passwordInput={this.state.passwordInput}
          handleChange={this.handleChange}
        />
      );
    }
  };

export default authenticate;

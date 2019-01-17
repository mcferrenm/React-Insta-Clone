import React from "react";

const authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isUserLoggedin: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ isUserLoggedin: true });
      }
    }

    render() {
      if (this.state.isUserLoggedin) {
        return <App />;
      }
      return <Login />;
    }
  };

export default authenticate;

import React, { Component } from "react";
import PropTypes from "prop-types";

import authenticate from "./components/authenticate/authenticate";
import Login from "./components/Login/Login";
import PostsPage from "./components/PostsPage/PostsPage";

import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsData: [],
      searchBarInput: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  componentDidMount() {
    localStorage.setItem("postsData", JSON.stringify(dummyData));
    this.setState({
      postsData: JSON.parse(localStorage.getItem("postsData"))
    });
  }

  render() {
    return (
      <PostsPage
        postsData={this.state.postsData}
        handleChange={this.handleChange}
        searchBarInput={this.state.searchBarInput}
        handleLogout={this.handleLogout}
      />
    );
  }
}

App.propTypes = {
  handleChange: PropTypes.func,
  handleLogout: PropTypes.func
};

export default authenticate(App)(Login);

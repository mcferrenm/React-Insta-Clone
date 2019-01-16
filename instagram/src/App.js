import React, { Component } from "react";

import authenticate from "./components/authenticate/authenticate";
import Login from "./components/Login/Login";
// import PostsPage from "./components/PostsPage/PostsPage";

import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postsData: [],
      searchBarInput: "",
      usernameInput: "",
      passwordInput: ""
    };
  }

  componentDidMount() {
    this.setState({
      postsData: dummyData
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = (event, username) => {
    event.preventDefault();
    //get username from input
    // set username to localstorage
    // set isLoggedIn to true on state?
  };

  render() {
    return (
      <div className="app">
        <Login
          handleLogin={this.handleLogin}
          usernameInput={this.state.usernameInput}
          passwordInput={this.state.passwordInput}
          handleChange={this.handleChange}
        />
        {/* <PostsPage
        postsData={this.state.postsData}
        handleChange={this.handleChange}
        searchBarInput={this.state.searchBarInput}
      /> */}
      </div>
    );
  }
}

authenticate(App);

export default App;

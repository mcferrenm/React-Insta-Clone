import React, { Component } from "react";

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

  componentDidMount() {
    this.setState({
      postsData: dummyData
    });
  }

  render() {
    return (
      <PostsPage
        postsData={this.state.postsData}
        handleChange={this.handleChange}
        searchBarInput={this.state.searchBarInput}
        handleLogout={this.props.handleLogout}
      />
    );
  }
}

export default authenticate(App)(Login);

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
      searchBarInput: ""
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

  render() {
    return (
      <div className="app">
        <Login />
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

import React, { Component } from "react";
import PostContainer from "./components/PostContainer/PostContainer";

import dummyData from "./dummy-data";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postsData: dummyData
    };
  }

  render() {
    return (
      <div className="app">
        <PostContainer posts={this.state.postsData} />
      </div>
    );
  }
}

export default App;

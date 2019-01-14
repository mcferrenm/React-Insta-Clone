import React, { Component } from "react";
import PostItem from "./components/PostContainer/PostItem";

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
        {this.state.postsData.map(post => (
          <PostItem post={post} />
        ))}
      </div>
    );
  }
}

export default App;

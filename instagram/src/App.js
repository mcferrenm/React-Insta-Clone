import React, { Component } from "react";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

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
        <SearchBar />
        {this.state.postsData.map(post => (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default App;

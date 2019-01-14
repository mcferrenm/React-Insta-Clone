import React, { Component } from "react";
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
          <p>{post.username}</p>
        ))}
      </div>
    );
  }
}

export default App;

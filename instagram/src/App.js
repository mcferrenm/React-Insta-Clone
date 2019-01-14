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
    return <div className="app">{console.log(this.state.postsData)}</div>;
  }
}

export default App;

import React, { Component } from "react";

import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

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
        <SearchBar
          handleChange={this.handleChange}
          searchBarInput={this.state.searchBarInput}
        />
        {this.state.postsData
          .filter(post => post.username.includes(this.state.searchBarInput))
          .map(post => (
            <PostContainer key={post.timestamp} post={post} />
          ))}
      </div>
    );
  }
}

export default App;

import React from "react";

import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostsPage = props => {
  return (
    <div className="app">
      <SearchBar
        handleChange={props.handleChange}
        searchBarInput={props.searchBarInput}
        handleLogout={props.handleLogout}
      />
      {props.postsData
        .filter(post => post.username.includes(props.searchBarInput))
        .map((post, index) => (
          <PostContainer key={post.timestamp} post={post} index={index} />
        ))}
    </div>
  );
};

export default PostsPage;

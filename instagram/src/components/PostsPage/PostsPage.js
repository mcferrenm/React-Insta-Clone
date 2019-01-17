import React from "react";
import PropTypes from "prop-types";

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

PostsPage.propTypes = {
  postsData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      like: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  ),
  handleChange: PropTypes.func,
  handleLogout: PropTypes.func,
  searchBarInput: PropTypes.string
};

export default PostsPage;

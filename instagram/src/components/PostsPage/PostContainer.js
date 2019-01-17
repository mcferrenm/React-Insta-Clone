import React from "react";
import PropTypes from "prop-types";

import PostItem from "./PostItem";

import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.post.likes,
      isLiked: false,
      isCommentInputVisable: false
    };
  }

  incrementLikes = () => {
    this.state.isLiked
      ? this.setState(prevState => ({
          likes: prevState.likes - 1,
          isLiked: !prevState.isLiked
        }))
      : this.setState(prevState => ({
          likes: prevState.likes + 1,
          isLiked: !prevState.isLiked
        }));
  };

  handleDisplayInput = () => {
    this.setState(prevState => ({
      isCommentInputVisable: !prevState.isCommentInputVisable
    }));
  };

  render() {
    return (
      <PostItem
        post={this.props.post}
        isLiked={this.state.isLiked}
        incrementLikes={this.incrementLikes}
        likes={this.state.likes}
        handleDisplayInput={this.handleDisplayInput}
        isCommentInputVisable={this.state.isCommentInputVisable}
        index={this.props.index}
      />
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
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
};

export default PostContainer;

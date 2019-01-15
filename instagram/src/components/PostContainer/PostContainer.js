import React from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.post.likes
    };
  }

  render() {
    return (
      <div className="post-container">
        <div className="post-header">
          <img
            className="thumbnail"
            src={this.props.post.thumbnailUrl}
            alt="User Thumbnail"
          />
          <span className="username"> {this.props.post.username}</span>
        </div>

        <img src={this.props.post.imageUrl} alt="" />

        <div className="post-body">
          <i className="far fa-heart" />
          <i className="far fa-comment" />

          <span className="likes-count">{this.state.likes} likes</span>

          <CommentSection
            post={this.props.post}
            comments={this.props.post.comments}
          />
        </div>
      </div>
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

import React from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="thumbnail"
          src={props.post.thumbnailUrl}
          alt="User Thumbnail"
        />
        <span className="username"> {props.post.username}</span>
      </div>

      <img src={props.post.imageUrl} alt="" />

      <div className="post-body">
        <i className="far fa-heart" />
        <i className="far fa-comment" />

        <span className="likes-count">{props.post.likes} likes</span>

        <CommentSection post={props.post} comments={props.post.comments} />
      </div>
    </div>
  );
};

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

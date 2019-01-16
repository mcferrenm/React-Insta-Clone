import React from "react";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";

import "./PostContainer.css";

const PostItem = props => {
  const isLikedClass = props.isLiked ? "fas fa-heart" : "far fa-heart";

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
        <i className={isLikedClass} onClick={props.incrementLikes} />
        <i className="far fa-comment" onClick={props.handleDisplayInput} />

        <span className="likes-count">{props.likes} likes</span>

        <CommentSection
          timestamp={props.post.timestamp}
          comments={props.post.comments}
          isCommentInputVisable={props.isCommentInputVisable}
        />
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  likes: 0
};

PostItem.propTypes = {
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
  }),
  isLiked: PropTypes.bool,
  incrementLikes: PropTypes.func,
  likes: PropTypes.number
};

export default PostItem;

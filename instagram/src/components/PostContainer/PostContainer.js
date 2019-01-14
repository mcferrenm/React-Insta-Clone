import React from "react";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.post.thumbnailUrl} alt="User Thumbnail" />
        <h4>{props.post.username}</h4>
      </div>
      <div className="post-body">
        <img src={props.post.imageUrl} alt="" />
        <i class="far fa-heart" />
        <i class="far fa-comment" />
        <span className="likes-count">{props.post.likes}</span>
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

import React from "react";

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
        <i className="far fa-comment" />

        <span className="likes-count">{props.likes} likes</span>

        <CommentSection
          timestamp={props.post.timestamp}
          comments={props.post.comments}
        />
      </div>
    </div>
  );
};

export default PostItem;

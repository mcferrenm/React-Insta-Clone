import React from "react";

const CommentItem = props => {
  return (
    <div className="comment-item">
      <span className="user-name">{props.commentItem.username}</span>
      <span className="user-name">{props.commentItem.text}</span>
    </div>
  );
};

export default CommentItem;

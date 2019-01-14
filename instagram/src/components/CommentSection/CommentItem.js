import React from "react";
import PropTypes from "prop-types";

const CommentItem = props => {
  return (
    <div className="comment-item">
      <span className="user-name">{props.commentItem.username}</span>
      <span className="user-name">{props.commentItem.text}</span>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentItem;

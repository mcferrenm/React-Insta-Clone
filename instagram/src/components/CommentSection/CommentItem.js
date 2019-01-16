import React from "react";
import PropTypes from "prop-types";

const CommentItem = props => {
  return (
    <div className="comment-item">
      <span className="username">{props.commentItem.username}</span>
      <span className="text">{props.commentItem.text}</span>
    </div>
  );
};

CommentItem.defaultProps = {
  commentItem: { username: "anon", text: "loading..." }
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentItem;

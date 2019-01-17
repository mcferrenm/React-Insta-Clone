import React from "react";
import PropTypes from "prop-types";

const CommentItem = props => {
  return (
    <div className="comment-item">
      <span className="username">{props.commentItem.username}</span>
      <span className="text">{props.commentItem.text}</span>
      <i
        className="fas fa-times remove-btn"
        onClick={props.removeComment}
        name={`${props.commentIndex}`}
      />
    </div>
  );
};

CommentItem.defaultProps = {
  commentItem: { username: "anon", text: "loading..." }
};

CommentItem.propTypes = {
  commentItem: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  }),
  removeComment: PropTypes.func,
  commentIndex: PropTypes.number
};

export default CommentItem;

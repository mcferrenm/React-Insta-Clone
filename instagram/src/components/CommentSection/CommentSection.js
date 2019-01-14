import React from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => (
        <CommentItem key={comment.text} commentItem={comment} />
      ))}
      <input type="text" placeholder="Add a comment..." />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;

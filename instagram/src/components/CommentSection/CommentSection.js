import React from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => (
        <CommentItem key={comment.text} commentItem={comment} />
      ))}
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

import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return <div>test</div>;
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

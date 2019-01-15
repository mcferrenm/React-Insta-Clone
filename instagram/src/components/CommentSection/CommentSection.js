import React from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    };
  }

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => (
          <CommentItem key={comment.text} commentItem={comment} />
        ))}
        <span className="timestamp">{this.props.post.timestamp}</span>

        <input
          className="comment-input"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;

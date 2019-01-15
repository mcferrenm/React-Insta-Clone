import React from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      inputText: "",
      userName: "mcferrenm"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { username: this.state.userName, text: this.state.inputText }
      ],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => (
          <CommentItem key={comment.text} commentItem={comment} />
        ))}
        <span className="timestamp">{this.props.post.timestamp}</span>

        <form onSubmit={this.addNewComment}>
          <input
            className="comment-input"
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleChange}
            name="inputText"
            value={this.state.inputText}
          />
        </form>
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

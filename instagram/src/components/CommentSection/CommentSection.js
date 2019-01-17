import React from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsData: [],
      inputText: "",
      userName: localStorage.getItem("username")
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    localStorage.setItem(
      "commentsData",
      JSON.stringify([
        ...this.state.commentsData,
        { username: this.state.userName, text: this.state.inputText }
      ])
    );

    this.setState({
      commentsData: JSON.parse(localStorage.getItem("commentsData")),
      inputText: ""
    });
  };

  componentDidMount() {
    if (localStorage.getItem("commentsData")) {
      this.setState({
        commentsData: JSON.parse(localStorage.getItem("commentsData"))
      });
    } else {
      this.setState({
        commentsData: this.props.comments
      });
    }
  }

  render() {
    const commentInputStyle = this.props.isCommentInputVisable
      ? "comment-input open"
      : "comment-input";
    return (
      <div className="comment-section">
        {this.state.commentsData.map(comment => (
          <CommentItem key={comment.text} commentItem={comment} />
        ))}
        <span className="timestamp">{this.props.timestamp}</span>

        <form onSubmit={this.addNewComment}>
          <input
            className={commentInputStyle}
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleChange}
            name="inputText"
            value={this.state.inputText}
            autoComplete="off"
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

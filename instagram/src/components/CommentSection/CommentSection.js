import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import CommentItem from "./CommentItem";

import CommentSectionContainer from "../Styles/Reusables/CommentSectionContainer";
import CommentInput from "../Styles/Reusables/CommentInput";

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
      `commentsData${this.props.index}`,
      JSON.stringify([
        ...this.state.commentsData,
        { username: this.state.userName, text: this.state.inputText }
      ])
    );

    this.setState({
      commentsData: JSON.parse(
        localStorage.getItem(`commentsData${this.props.index}`)
      ),
      inputText: ""
    });
  };

  removeComment = event => {
    localStorage.setItem(
      `commentsData${this.props.index}`,
      JSON.stringify(
        this.state.commentsData.filter(
          (comment, index) =>
            index !== parseInt(event.target.getAttribute("name"), 10)
        )
      )
    );

    this.setState({
      commentsData: JSON.parse(
        localStorage.getItem(`commentsData${this.props.index}`)
      )
    });
  };

  componentDidMount() {
    if (localStorage.getItem(`commentsData${this.props.index}`)) {
      this.setState({
        commentsData: JSON.parse(
          localStorage.getItem(`commentsData${this.props.index}`)
        )
      });
    } else {
      this.setState({
        commentsData: this.props.comments
      });
    }
  }

  render() {
    const relativeTime = moment(
      this.props.timestamp,
      "MMMM Do YYYY, h:mm:ss a"
    ).fromNow();

    return (
      <CommentSectionContainer>
        {this.state.commentsData.map((comment, index) => (
          <CommentItem
            key={`${this.props.index}${comment.text}`}
            commentItem={comment}
            removeComment={this.removeComment}
            commentIndex={index}
            currentUser={this.state.userName}
          />
        ))}
        <span className="timestamp">{relativeTime}</span>

        <form onSubmit={this.addNewComment}>
          <CommentInput
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleChange}
            name="inputText"
            value={this.state.inputText}
            autoComplete="off"
            visable={this.props.isCommentInputVisable}
          />
        </form>
      </CommentSectionContainer>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  index: PropTypes.number,
  timestamp: PropTypes.string,
  isCommentInputVisable: PropTypes.bool
};

export default CommentSection;

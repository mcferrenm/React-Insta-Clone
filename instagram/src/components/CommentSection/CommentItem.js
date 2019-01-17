import React from "react";
import PropTypes from "prop-types";

import CommentItemContainer from "../Styles/Reusables/CommentItemContainer";
import RemoveCommentBtn from "../Styles/Reusables/RemoveCommentBtn";

const CommentItem = props => {
  return (
    <CommentItemContainer>
      <span className="username">{props.commentItem.username}</span>
      <span className="text">{props.commentItem.text}</span>

      {props.commentItem.username === props.currentUser && (
        <RemoveCommentBtn
          className="fas fa-times"
          onClick={props.removeComment}
          name={`${props.commentIndex}`}
        />
      )}
    </CommentItemContainer>
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

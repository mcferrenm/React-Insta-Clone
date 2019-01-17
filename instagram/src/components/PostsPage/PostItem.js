import React from "react";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";

import PostItemContainer from "../Styles/Reusables/PostItemContainer";
import Username from "../Styles/Reusables/Username";
import UserThumbnail from "../Styles/Reusables/UserThumbnail";

const PostItem = props => {
  const isLikedClass = props.isLiked ? "fas fa-heart" : "far fa-heart";

  return (
    <PostItemContainer>
      <div className="post-header">
        <UserThumbnail src={props.post.thumbnailUrl} alt="User Thumbnail" />
        <Username primary>{props.post.username}</Username>
      </div>

      <img src={props.post.imageUrl} alt="" />

      <div className="post-body">
        <i className={isLikedClass} onClick={props.incrementLikes} />
        <i className="far fa-comment" onClick={props.handleDisplayInput} />

        <span className="likes-count">{props.likes} likes</span>

        <CommentSection
          timestamp={props.post.timestamp}
          comments={props.post.comments}
          isCommentInputVisable={props.isCommentInputVisable}
          index={props.index}
        />
      </div>
    </PostItemContainer>
  );
};

PostItem.defaultProps = {
  likes: 0
};

PostItem.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    like: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  }),
  isLiked: PropTypes.bool,
  incrementLikes: PropTypes.func,
  likes: PropTypes.number,
  handleDisplayInput: PropTypes.func,
  isCommentInputVisable: PropTypes.bool,
  index: PropTypes.number
};

export default PostItem;

import React from "react";

const PostItem = props => {
  return <p key={props.post.timestamp}>{props.post.username}</p>;
};

export default PostItem;

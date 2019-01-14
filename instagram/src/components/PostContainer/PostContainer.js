import React from "react";
import PostItem from "./PostItem";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <PostItem key={post.timestamp} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;

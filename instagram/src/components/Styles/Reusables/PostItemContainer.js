import styled from "styled-components";

const PostItemContainer = styled.div`
  max-width: 600px;
  margin-bottom: 1rem;

  .post-header {
    display: flex;
    align-items: center;
    padding: 1rem 1rem 1.5rem;

    .thumbnail {
      width: 25px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  .post-body {
    padding: 1rem;

    .like-icon,
    .comment-icon {
      display: inline-block;
      margin: 0 1rem 1rem 0;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        color: grey;
      }
    }

    .likes-count {
      display: block;
      margin: 0 0 1rem;
    }
  }
`;
export default PostItemContainer;

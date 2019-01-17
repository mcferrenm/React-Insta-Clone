import styled from "styled-components";

const CommentSectionContainer = styled.div`
  margin: 0 0 1rem;

  .comment-item {
    margin: 0 0 0.5rem;
    display: flex;
    .username {
      margin-right: 1rem;
      font-weight: bold;
    }
    .remove-btn {
      margin: 0 0 0 auto;
      color: lightgrey;
    }
  }

  .timestamp {
    display: block;
    margin: 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgrey;
    font-size: 1.4rem;
  }

  .open {
    display: block;
  }
`;

export default CommentSectionContainer;

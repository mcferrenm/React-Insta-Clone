import styled from "styled-components";

const PostItemContainer = styled.div`
  max-width: 600px;

  .post-header {
    display: flex;
    align-items: center;
    padding: 1rem;

    .thumbnail {
      width: 25px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  .post-body {
    padding: 1rem;

    i {
      display: inline-block;
      margin: 0 1rem 1rem 0;
      font-size: 1.6rem;
    }

    .likes-count {
      display: block;
      margin: 0 0 1rem;
    }
  }
`;
export default PostItemContainer;

import styled, { css } from "styled-components";

const CommentInput = styled.input`
  display: none;
  width: 100%;
  border: none;
  font-size: 1.6rem;
  padding: 1rem 0;

  ${props =>
    props.visable &&
    css`
      display: block;
    `}
`;

export default CommentInput;

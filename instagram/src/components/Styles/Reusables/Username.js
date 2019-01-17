import styled, { css } from "styled-components";

const Username = styled.span`
  ${props =>
    props.primary &&
    css`
      font-weight: bolder;
      font-size: 1.8rem;
    `}
`;

export default Username;

import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  i {
    font-size: 2rem;
  }

  .left {
    width: 33%;
    display: flex;
    align-items: center;

    i {
      border-right: 1px solid lightgrey;
      padding-right: 2rem;
      margin-right: 2rem;
    }
  }

  .center {
    width: 33%;
    display: flex;
    justify-content: center;

    input {
      width: 66%;
      border-radius: 3px;
      border: 1px solid lightgrey;
      padding: 0.5rem;
    }
  }

  .right {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    i {
      margin-left: 3rem;
    }

    .fa-door-open {
      cursor: pointer;
    }
  }
`;

export default Header;

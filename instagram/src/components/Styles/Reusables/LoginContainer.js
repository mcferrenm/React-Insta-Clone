import styled from "styled-components";

const LoginContainer = styled.div`
  max-width: 1024px;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 500px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  img {
    margin-bottom: 1rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      font-size: 2rem;
      padding: 1rem 0;
      margin-bottom: 2rem;
      border: none;
      border-bottom: 1px solid lightgrey;
      text-align: center;
    }

    button {
      margin-top: 2rem;
      font-size: 1.6rem;
      padding: 1rem 6rem;
    }
  }
`;

export default LoginContainer;

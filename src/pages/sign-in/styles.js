import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 700;

    &:hover {
      color: #ff6363;
    }
  }

  input {
    width: 350px;
    height: 50px;
    border-radius: 7px;
    padding-left: 10px;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 15px;
    margin-bottom: 15px;
    border: none;
    background-color: #fff;
  }

  button {
    width: 250px;
    height: 50px;
    background-color: #ff6363;
    border-radius: 7px;
    border: none;
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const SignInContainer = styled.div`
  height: 100vh;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    color: #000;
    font-size: 15px;
  }

  h1 {
    color: #ff6363;
    margin-bottom: 30px;
  }
`;

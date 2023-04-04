import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;

    &:hover {
      color: #aaa;
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
  }

  button {
    width: 350px;
    height: 50px;
    background-color: #f35f40;
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
  background-color: #1C1C1C;
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
    color: #fff;
    font-size: 20px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 50px;
  }
`;

export const Button = styled.button`

  margin: 20px;
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ff6363;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    background-color: #ff6363;
    color: #fff;
  }
`;

import styled from "styled-components";

export const NavBarStyle = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;

  div {
    display: flex;

    
  }

  h1 {
    color: #ff6363;
  }

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #aaa;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-weight: 700;
  height: 30px;
  width: 180px;
  cursor: pointer;
  border-radius: 15px;
  margin: 0 10px;

  &:hover {
    color: #fff;
    background-color: #ff6363;
  }

  a {
      text-decoration: none;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #ff6363;
      }
    }
`;

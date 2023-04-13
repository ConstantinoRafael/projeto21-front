import styled from "styled-components";

export const NavBarStyle = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;


  h1 {
    color: #FF6363;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #aaa;
    }
  }
`;

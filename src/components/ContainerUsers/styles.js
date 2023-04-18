import styled from "styled-components";

export const ContainerUsersStyle = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px
`;

export const ContainerEachUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 400px;
  margin: 10px;

  border-radius: 10px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 20px;
  
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  margin: 20px;

  img {
    height: 500px;
    border-radius: 150px;
  }

  div {
    background-color: #fff1f1;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }
`;

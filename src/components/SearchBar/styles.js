import styled from "styled-components";

export const ContainerSearchBar = styled.div`
  width: 80%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    background-color: #fff;
    border-radius: 20px;

    input {
      border: none;
      padding: 5px;
      height: 30px;
      width: 80;
      background-color: #fff;
      margin: 5px 0px;
    }
  }

  button {
    width: 17%;
    height: 40%;
    border: none;
    border-radius: 10px;
    background-color: #FF6363;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    &:hover{
      transform: scale(1.1);
    }
  }
`;

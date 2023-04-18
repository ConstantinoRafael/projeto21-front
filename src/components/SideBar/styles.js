import styled from "styled-components";

export const SideBarContainer = styled.div`
  margin-top: 200px;
  margin-left: 20px;
`;

export const EachOption = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 20px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 20px;

  &:hover {
    background-color: #ff6363;
    color: #fff;
    transform: scale(1.1);
  }
`;

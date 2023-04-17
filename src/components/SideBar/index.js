import { useEffect } from "react";
import { EachOption, SideBarContainer } from "./styles";

export default function SideBar({ users, setUsers }) {
  return (
    <SideBarContainer>
      <EachOption>bateria</EachOption>
      <EachOption>canto</EachOption>
      <EachOption>cavaquinho</EachOption>
      <EachOption>contrabaixo</EachOption>
      <EachOption>guitarra</EachOption>
      <EachOption>que tiro foi esse</EachOption>
      <EachOption>violão</EachOption>
      <EachOption>violino</EachOption>
    </SideBarContainer>
  );
}

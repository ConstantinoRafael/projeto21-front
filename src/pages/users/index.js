import MainContainer from "@/components/MainContainer";
import SideBar from "@/components/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ContainerUsers from "@/components/ContainerUsers";
import { MainContainerUsersPage } from "./styles";

export default function Users() {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/users");

    promise.then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <MainContainer>
        <MainContainerUsersPage>
          <SideBar users={users} setUsers={setUsers}></SideBar>
          <ContainerUsers users={users}/>
        </MainContainerUsersPage>
      </MainContainer>
    </>
  );
}

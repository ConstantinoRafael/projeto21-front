import { ContainerEachUser, ContainerUsersStyle } from "./styles";
import none from "../../../public/images/profilenone.jpg";
import Image from "next/image";
import Link from "next/link";

export default function ContainerUsers({ users }) {
  return (
    <ContainerUsersStyle>
      {users?.map((u) => (
        <ContainerEachUser key={u.id}>
          {u.Enrrolment[0].urlProfile === "none" ? (
            <Image src={none} alt="sem foto de perfil"></Image>
          ) : (
            <img src={u.Enrrolment[0].urlProfile} alt="foto de perfil"></img>
          )}
          <h2>{u.Enrrolment[0].name}</h2>
          <a href={`https://www.instagram.com/${u.Enrrolment[0].instagram.substring(1)}`}>
            {u.Enrrolment[0].instagram}
          </a>
        </ContainerEachUser>
      ))}
    </ContainerUsersStyle>
  );
}

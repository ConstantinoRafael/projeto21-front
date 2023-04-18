import { ContainerEachUser, ContainerUsersStyle } from "./styles";
import none from "../../../public/images/profilenone.jpg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";

export default function ContainerUsers({ users }) {
  console.log(users);

  return (
    <ContainerUsersStyle>
      {users?.map((u) => (
        <ContainerEachUser key={u.id}>
          {u.urlProfile === "none" ? (
            <Image src={none} alt="sem foto de perfil"></Image>
          ) : (
            <img src={u.urlProfile} alt="foto de perfil"></img>
          )}
          <h2>{u.name}</h2>
          <a href={`https://www.instagram.com/${u.instagram.substring(1)}`}>
            <AiOutlineInstagram />
            <span> </span>
            {u.instagram.substring(1)}
          </a>
        </ContainerEachUser>
      ))}
    </ContainerUsersStyle>
  );
}

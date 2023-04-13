import Link from "next/link";
import { Container, ContainerProfile } from "./styles";
import sandy from "../../../public/images/sandy.png";
import Image from "next/image";

export default function ContainerUsersHome() {
  return (
    <Container>
      <ContainerProfile>
        <Image src={sandy} alt="imagem da sandy"></Image>
        <div>
          <h3>Sandy</h3>
          <p>Cantor(a) pop</p>
        </div>
      </ContainerProfile>

      <ContainerProfile>
        <Image src={sandy} alt="imagem da sandy"></Image>
        <h3>Nome</h3>
        <p>Cantor</p>
      </ContainerProfile>
      <ContainerProfile>
        <Image src={sandy} alt="imagem da sandy"></Image>
        <h3>Nome</h3>
        <p>Cantor</p>
      </ContainerProfile>
    </Container>
  );
}

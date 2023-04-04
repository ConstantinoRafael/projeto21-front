import Link from "next/link";
import { Container, FormStyle, LogoContainer, SignInContainer } from "./styles";
import logo from "../../../public/images/logo-music4all.png";
import Image from "next/image";

export default function SignUp() {
  return (
    <SignInContainer>
      <Container>
        <LogoContainer>
          <Image src={logo} alt="logo da imagem" />
          <p>Encontre o músico que precisa</p> <br></br>
          <p>ou seja encontrado!</p>
        </LogoContainer>
        <FormStyle>
          <input placeholder="email"></input>
          <input placeholder="senha"></input>
          <input placeholder="confirme a senha"></input>
          <button>Cadastrar</button>
          <p>
            Já é de casa? <Link href="/sign-in">Entre!</Link>
          </p>
        </FormStyle>
      </Container>
    </SignInContainer>
  );
}

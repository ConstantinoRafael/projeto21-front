import Link from "next/link";
import { Container, FormStyle, LogoContainer, SignInContainer } from "./styles";
import logo from "../../../public/images/logo-music4all.png";
import Image from "next/image";

export default function SignIn() {
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
          <button>Entrar</button>
          <p>
            É novo aqui? <Link href="/sign-up">Cadastre-se!</Link>
          </p>
        </FormStyle>
      </Container>
    </SignInContainer>
  );
}

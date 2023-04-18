import Link from "next/link";
import { Container, FormStyle, LogoContainer, SignInContainer } from "./styles";
import logo from "../../../public/images/logo-music4all.png";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignUp() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  // const [confirmPassword, setConfirmPassword] = useState(undefined);
  const router = useRouter();
  async function sendData(e) {
    e.preventDefault();

    const body = {
      email,
      password: password.toString(),
    };

    const promise = axios.post("http://localhost:5000/users", body);

    promise.then(() => {
      alert("Cadastro realizado com sucesso!");
      router.push("/sign-in");
    });

    promise.catch((err) => console.log(err));
  }
  return (
    <SignInContainer>
      <Container>
        <LogoContainer>
          <h1>todo músico</h1>
          <p>Encontre o músico que precisa!</p> <br></br>
        </LogoContainer>
        <FormStyle onSubmit={sendData}>
          <input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {/* <input placeholder="confirme a senha"></input> */}
          <button type="submit">Cadastrar</button>
          <p>
            Já é de casa? <Link href="/sign-in">Entre!</Link>
          </p>
        </FormStyle>
      </Container>
    </SignInContainer>
  );
}

import Link from "next/link";
import { Container, FormStyle, LogoContainer, SignInContainer } from "./styles";
import logo from "../../../public/images/logo-music4all.png";
import Image from "next/image";
import { useState } from "react";
import api from "@/services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const router = useRouter();
  async function sendData(e) {
    e.preventDefault();

    const body = {
      email,
      password: password.toString(),
    };

    const promise = axios.post("http://localhost:5000/auth/sign-in", body);

    promise.then(() => {
      alert("Login realizado com sucesso!");
      router.push("/");
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
          <button type="submit">Entrar</button>
          <p>
            É novo aqui? <Link href="/sign-up">Cadastre-se!</Link>
          </p>
        </FormStyle>
      </Container>
    </SignInContainer>
  );
}

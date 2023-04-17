import Link from "next/link";
import { Container, FormStyle, LogoContainer, SignInContainer } from "./styles";
import logo from "../../../public/images/logo-music4all.png";
import Image from "next/image";
import { useState } from "react";
import api from "@/services/api";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  async function sendData(e) {
    e.preventDefault();

    const body = {
      email,
      password: password.toString(),
    };

    try {
      toast.success('Você entrou!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      const users = await axios.post(
        "http://localhost:5000/auth/sign-in",
        body
      );

      console.log("deu booom");
    } catch (err) {
      return toast.error("Usuário não encontrado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
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

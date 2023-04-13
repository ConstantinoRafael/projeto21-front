import Link from "next/link";
import { NavBarStyle } from "./styles";

export default function NavBar({ children }) {
  return (
    <NavBarStyle>
      <h1>Music-4ll</h1>
      <Link href="/sign-in">Cadastrar</Link>
      <Link href="/sign-up">Entrar</Link>
    </NavBarStyle>
  );
}

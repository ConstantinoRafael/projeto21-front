import Link from "next/link";
import { Button, NavBarStyle } from "./styles";

export default function NavBar({ children }) {
  return (
    <NavBarStyle>
      <h1>todo músico</h1>
      <div>
        <Link href="/sign-up">
          <Button>Cadastrar</Button>
        </Link>
        <Link href="/sign-in">
          <Button>Entrar</Button>
        </Link>
      </div>
    </NavBarStyle>
  );
}

import Link from "next/link";
import SearchBar from "../SearchBar";
import { Button, Container } from "./styles";

export default function ContainerHomeLeft() {
  return (
    <Container>
      <h1>
        Encontre <br></br>o músico<br></br> perfeito
      </h1>

      <Button><Link href={"/users"}>músicos</Link></Button>
    </Container>
  );
}

import { ContainerSearchBar } from "./styles";

export default function SearchBar() {
  return (
    <>
      <ContainerSearchBar>
        <div>
          <input placeholder="O que deseja procurar?"></input>

          <input placeholder="Onde?"></input>
        </div>
        <button>Buscar</button>
      </ContainerSearchBar>
    </>
  );
}

import { useEffect } from "react";
import { EachOption, SideBarContainer } from "./styles";
import axios from "axios";

export default function SideBar({ setUsers }) {
  function getUsersByInstrument(inst) {
    const promise = axios.get(`http://localhost:5000/enrollments/${inst}`);

    promise.then((res) => setUsers(res.data));

    promise.catch((err) => console.log(err.response.data));
  }

  return (
    <SideBarContainer>
      <EachOption onClick={() => getUsersByInstrument("bateria")}>
        bateria
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("canto")}>
        canto
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("cavaquinho")}>
        cavaquinho
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("contrabaixo")}>
        contrabaixo
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("guitarra")}>
        guitarra
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("que tiro foi esse")}>
        que tiro foi esse
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("violão")}>
        violão
      </EachOption>
      <EachOption onClick={() => getUsersByInstrument("violino")}>
        violino
      </EachOption>
    </SideBarContainer>
  );
}

import MainContainer from "@/components/MainContainer";
import Head from "next/head";
import { ContainerHomePage } from "./styles";
import ContainerHomeLeft from "@/components/ConstainerHomeLeft";
import ContainerUsersHome from "@/components/ContainerUsersHome";

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>todo músico</title>
        <meta name="keywords" content="músicos, cantores, disponíveis"></meta>
        <meta
          name="description"
          content="Encontre músicos e seja encontado"
        ></meta>
      </Head>
      <ContainerHomePage>
        <ContainerHomeLeft/>
        <ContainerUsersHome />
      </ContainerHomePage>
    </MainContainer>
  );
}

import MainContainer from "@/components/MainContainer";
import Head from "next/head";

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Music-4ll</title>
        <meta name="keywords" content="músicos, cantores, disponíveis"></meta>
        <meta
          name="description"
          content="Encontrei músicos e seja encontado"
        ></meta>
      </Head>
      <div>
        <h1>A página vem aquiiii</h1>
      </div>
    </MainContainer>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import * as S from "@/styles/pages/Home";

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Next Boilerplate</title>
      </Head>
      <h1>Olá</h1>
    </S.Container>
  );
};
export default Home;

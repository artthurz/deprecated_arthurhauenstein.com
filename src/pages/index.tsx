import type { NextPage } from "next";
import Head from "next/head";
import * as S from "@/styles/pages/Home";
import LoadingEllipsis from "@/components/LoadingEllipsis";

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Arthur Hauenstein</title>
      </Head>
      <LoadingEllipsis />
      <h1>Em construção 👷‍♂️</h1>
    </S.Container>
  );
};
export default Home;

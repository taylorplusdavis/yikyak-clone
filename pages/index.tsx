import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-8 min-h-screen bg-gradient-to-tr from-red-100 to-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <Main />
    </div>
  );
};

export default Home;

import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sheertex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Main />

      <Footer />
    </div>
  );
}

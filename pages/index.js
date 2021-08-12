import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Offer from "../components/Offer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Sheertex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Offer />

      <Navbar />

      <Main />

      <Footer />
    </div>
  );
}

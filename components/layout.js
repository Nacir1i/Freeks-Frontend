import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function layout({ children }) {
  return (
    <>
      <Head>
        <title>Freeks.exe</title>
      </Head>
      <Nav />
      <main className="w-full h-full pt-20">{children}</main>
      <Footer />
    </>
  );
}

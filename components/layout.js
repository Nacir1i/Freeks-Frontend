import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import Location from "./Location"

export default ({ children }) => {
  return (
    <>
      <Head>
        <title>Freeks.exe</title>
      </Head>
      <Nav />
      <main className="w-full ">{children}</main>
      {/* <Location/> */}
      <Footer />
    </>
  );
};

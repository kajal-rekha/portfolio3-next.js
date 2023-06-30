import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Social />
      <Footer />
    </>
  );
}

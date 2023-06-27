import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Projects from "./projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./skills";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

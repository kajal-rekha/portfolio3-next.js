import Hero from "@/components/Hero";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;

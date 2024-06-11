import Contact from "../../Contact/Contact";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Tech from "../Tech/Tech";

const Homepage = () => {
  return (
    <>
      <Banner />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;

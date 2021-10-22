import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Greeting from "./Greeting/Greeting";
import Skill from "./Skill/Skill";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
export default function Main() {
  return (
    <div>
      <Navigation />
      <Greeting />
      <Skill />
      <Education />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

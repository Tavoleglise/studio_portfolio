import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Projects from "../Projects";
import TextBox from "../TextBox";
import Contact from "../Contact";
import { AnimatePresence } from "framer-motion";

export default function RightPanel({ activeSection, setActiveSection }) {
  return (
    <div className="RightPanel">
      <AnimatePresence>
        {activeSection === 1 && <AboutMe setActiveSection={setActiveSection} />}
        {activeSection === 2 && <Skills />}
        {activeSection === 3 && <Projects />}
        {activeSection === 4 && <Contact />}
      </AnimatePresence>
    </div>
  );
}

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
        {activeSection === 0 && <AboutMe setActiveSection={setActiveSection} />}
        {activeSection === 1 && <Skills />}
        {activeSection === 2 && <Projects />}
        {activeSection === 3 && <Contact />}
      </AnimatePresence>
    </div>
  );
}

import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import { AnimatePresence } from "framer-motion";
import usePage from "../../stores/usePage.jsx";

export default function RightPanel({ activeSection, setActiveSection }) {
  const changeActiveSection = usePage((state) => state.changeActiveSection);
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

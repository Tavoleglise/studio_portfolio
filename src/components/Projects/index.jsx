import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.scss";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleProjectBackButtonClick = () => {
    let current = currentProject;
    if (current !== 0) {
      setCurrentProject(current - 1);
      console.log("e mueve");
    }
  };
  const handleProjectForwardButtonClick = () => {
    let current = currentProject;
    if (current < 3) {
      setCurrentProject(current + 1);
      console.log("e mueve");
    }
  };

  return (
    <motion.div
      className="textBox textbox-projects-section"
      initial={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
      exit={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
    >
      <span className="background"></span>
      <div className="content content-projects-section">
        <div className="title">
          <h1>My projects</h1>
          <hr />

          <span style={{ fontSize: 20 }}>&#129513;</span>
        </div>
        <motion.div
          className="projectsContainer"
          animate={{
            x: `calc(-${currentProject * 100}% - (22px * ${currentProject}))`,
          }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <AnimatePresence>
            <ProjectCard
              title="0"
              key={0}
              id={0}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
            <ProjectCard
              title="1"
              key={1}
              id={1}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
            <ProjectCard
              title="2"
              key={2}
              id={2}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
            <ProjectCard
              title="3"
              key={3}
              id={3}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
          </AnimatePresence>
        </motion.div>
        <div className="projects-button-container">
          <motion.div
            className="project-button orange-hover center"
            onClick={handleProjectBackButtonClick}
            whileTap={{ scale: 0.8 }}
          >
            <img src="./icons/angle-left.svg" alt="" />
          </motion.div>
          <motion.div
            className="project-button orange-hover center"
            onClick={handleProjectForwardButtonClick}
            whileTap={{ scale: 0.8 }}
          >
            <img src="./icons/angle-right.svg" alt="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

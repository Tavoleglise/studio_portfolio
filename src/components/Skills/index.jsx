import { motion, useAnimate } from "framer-motion";
import Button from "../Button";
import "./skills.scss";

export default function () {
  return (
    <motion.div
      className="textBox"
      initial={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
      exit={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
    >
      <span className="background"></span>
      <div className="content">
        <div className="title">
          <h1>My skills</h1>
          <hr />
          <span style={{ fontSize: 20 }}>&#128640;</span>
        </div>
        <p>
          For over 3 years I had many opportunities to work in a vast spectrum
          of web technologies what let me gather a significant amount of various
          experience.
        </p>
        <div className="technologyList">
          <div className="technologyTag">Javascript</div>
          <div className="technologyTag">WebGL</div>
          <div className="technologyTag">HTML + CSS</div>
          <div className="technologyTag">React</div>
          <div className="technologyTag">Web design</div>
          <div className="technologyTag">3d Modeling</div>
        </div>
      </div>
    </motion.div>
  );
}

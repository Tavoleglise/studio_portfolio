import { motion, useAnimate } from "framer-motion";
import Button from "../Button";
import "./aboutMe.scss";

export default function ({ setActiveSection }) {
  const [scope, animate] = useAnimate();
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
          <h1>About Me</h1>
          <hr />

          <span style={{ fontSize: 20 }}> &#128513;</span>
        </div>
        <p>
          I'm a front-end developer located in Mexico City. I have a real
          passion for UI design, animation, 3D implementation and interactive
          experiences.
        </p>
        <p>
          Organized and self-taught person. Fan of videogames, car racing and
          tennis.
        </p>
        <p>
          Interested in the entire front-end spectrum especially in ReactJs and
          looking for a positive team to work and learn with.
        </p>
        <div
          className="big-button orange-hover"
          onClick={() => {
            setActiveSection(4);
          }}
        >
          Get in touch
        </div>
      </div>
    </motion.div>
  );
}

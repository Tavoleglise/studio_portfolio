import { motion } from "framer-motion";

export default function TextBox({ title }) {
  return (
    <motion.div
      className="textBox"
      initial={{ clipPath: "inset(10% 50% 90% 50% round 10px)", opacity: 0 }}
      animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)", opacity: 1 }}
      exit={{ clipPath: "inset(10% 50% 90% 50% round 10px)", opacity: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
    >
      <span className="background"></span>
      <div className="content">
        <h1>{title}</h1>
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
      </div>
    </motion.div>
  );
}

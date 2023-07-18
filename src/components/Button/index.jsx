import "./button.scss";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
export default function Button({ text }) {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  const buttonsVariants = {
    hover: {
      clipPath: "inset(0% 0% 0% 0% round 30px)",
    },
    initial: {
      clipPath: "inset(50% 50% 50% 50% round 10px)",
    },
  };
  return (
    <button
      className="button-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        className="secondBackground"
        variants={buttonsVariants}
        animate={isHovered ? "hover" : "initial"}
      ></motion.span>
      <div className="buttonText">{text}</div>
    </button>
  );
}

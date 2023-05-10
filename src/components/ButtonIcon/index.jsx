import { motion } from "framer-motion";
import { useState } from "react";

export default function ButtonIcon({
  image,
  greyImage,
  active,
  setActiveSection,
  id,
  text,
}) {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const handleButtonClick = () => {
    setActiveSection(id);
  };

  const buttonsVariants = {
    tap: {
      scale: 0.8,
      transition: { duration: 1, type: "none" },
    },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const textVariants = {
    hover: {
      x: 0,
      scale: [1.1, 1],
      opacity: 1,
    },
    initial: {
      x: -50,
      scale: 1,
      opacity: 0,
    },
  };

  return (
    <motion.button
      className="buttonIcon"
      whileTap={"tap"}
      whileHover={"hover"}
      variants={buttonsVariants}
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {<img src={active ? image : greyImage} alt="" />}
      <motion.span
        variants={textVariants}
        initial={"inicial"}
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 0.5 }}
        className="buttonIcon_text"
      >
        {text}
      </motion.span>
    </motion.button>
  );
}

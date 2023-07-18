import ButtonIcon from "../ButtonIcon";
import { useAnimate, stagger, motion } from "framer-motion";
import { button } from "leva";
import { useState, useEffect } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const buttons = [
  {
    image: "./icons/me-filled.svg",
    greyImage: "./icons/me.svg",
    id: 0,
    text: "About me",
  },
  {
    image: "./icons/rocket-lunch-filled.svg",
    greyImage: "./icons/rocket-lunch.svg",
    id: 1,
    text: "My skills",
  },
  {
    image: "./icons/puzzle-piece-filled.svg",
    greyImage: "./icons/puzzle-piece.svg",
    id: 2,
    text: "Projects",
  },
  {
    image: "./icons/attribution-pencil-filled.svg",
    greyImage: "./icons/attribution-pencil.svg",
    id: 3,
    text: "Contact",
  },
  {
    image: "./icons/attribution-pencil-filled.svg",
    greyImage: "./icons/attribution-pencil.svg",
    id: 4,
    text: "Beat me",
  },
  /*{
    image: "./icons/attribution-pencil-filled.svg",
    greyImage: "./icons/attribution-pencil.svg",
    id: 5,
    text: "Prueba",
  },*/
];

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
    animate(
      ".buttonIcon",
      isOpen
        ? { x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }
        : { x: -100, opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function SideMenu({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(true);
  const scope = useMenuAnimation(isOpen);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div ref={scope} className="sideMenu">
        <button className="toggleButton orange-hover" onClick={handleClick}>
          <img className="arrow" src="./icons/angle-right.svg" alt="" />
        </button>
        {buttons.map((b) => {
          return (
            <ButtonIcon
              key={b.id}
              image={b.image}
              greyImage={b.greyImage}
              active={activeSection === b.id ? true : false}
              setActiveSection={setActiveSection}
              id={b.id}
              text={b.text}
            />
          );
        })}
      </div>
    </>
  );
}

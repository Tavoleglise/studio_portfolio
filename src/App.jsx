import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { motion, useAnimate } from "framer-motion";
import * as THREE from "three";
import UserInterface from "./pages/UserInterface/index.jsx";
import { useState } from "react";
import "./app.scss";

export default function App() {
  const [activeSection, setActiveSection] = useState(1);
  const [cameraType, setCameraType] = useState(0);

  const handleCameraTypeClick = () => {
    setCameraType(cameraType === 0 ? 1 : 0);
  };
  return (
    <>
      {cameraType === 0 ? (
        <UserInterface
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ) : null}
      <motion.div className="cameraTypeButton" onClick={handleCameraTypeClick}>
        {cameraType === 0 ? (
          <img src="./icons/camera.svg" alt="" />
        ) : (
          <img src="./icons/picture.svg" alt="" />
        )}
      </motion.div>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 1],
        }}
      >
        <Experience activeSection={activeSection} cameraType={cameraType} />
      </Canvas>
    </>
  );
}

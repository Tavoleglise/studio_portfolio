import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { motion, useAnimate } from "framer-motion";
import * as THREE from "three";
import UserInterface from "./pages/UserInterface/index.jsx";
import { useState } from "react";
import "./app.scss";
import usePage from "./stores/usePage.jsx";
import LoadingScree from "./components/LoadingScreen";

export default function App() {
  const activeSection = usePage((state) => state.activeSection);
  const cameraType = usePage((state) => state.cameraType);
  const changeCameraType = usePage((state) => state.changeCameraType);

  const handleCameraTypeClick = () => {
    changeCameraType(cameraType === 0 ? 1 : 0);
  };
  return (
    <>
      <LoadingScree />
      {cameraType === 0 ? <UserInterface /> : null}
      <motion.div className="cameraTypeButton" onClick={handleCameraTypeClick}>
        {cameraType === 0 ? (
          <img src="./icons/camera.svg" alt="" />
        ) : (
          <img src="./icons/picture.svg" alt="" />
        )}
      </motion.div>
      <Suspense fallback={null}>
        <Canvas
          flat
          camera={{
            fov: 45,
            near: 0.1,
            far: 800,
            position: [0, 0, 1],
            rotation: [0, Math.PI, 0],
          }}
        >
          <Experience activeSection={activeSection} cameraType={cameraType} />
        </Canvas>
      </Suspense>
    </>
  );
}

import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";

export default function CameraControls() {
  const [cameraState, setCameraState] = useState(1);
  //debugging
  const {
    CameraPosition,
    targetPosition,
    groupPosition,
    groupRotation,
    enableParallax,
    cameraSt,
    choise,
  } = useControls({
    CameraPosition: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      step: 0.01,
    },
    targetPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },

    groupPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },

    groupRotation: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    enableParallax: true,
    cameraSt: {
      x: { state: 0 },
      step: 1,
    },
    choise: { options: ["a", "b", "c"] },
  });

  //camera

  const { camera, size } = useThree();
  camera.position.set(CameraPosition.x, CameraPosition.y, CameraPosition.z);

  //move mouse event

  const orbitControlGroupRef = useRef();

  const cursor = {};
  cursor.x = 0;
  cursor.y = 0;

  window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / size.width - 0.5;
    cursor.y = event.clientY / size.height - 0.5;
  });

  function mouseParallax(delta) {
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;

    camera.position.x += (parallaxX - camera.position.x) * 2 * delta;
    camera.position.y += (parallaxY - camera.position.y) * 2 * delta;
  }

  useFrame((state, delta) => {
    enableParallax ? mouseParallax(delta) : null;
  });

  //Camera animations
  let cameraAnimation = "origen";
  if (choise === "a") {
    cameraAnimation = "estadoCero";
  } else if (choise === "b") {
    cameraAnimation = "estadoUno";
  } else if (choise === "c") {
    cameraAnimation = "estadoDos";
  }

  const cameraVariant = {
    origen: {
      rotateY: 0,
      x: 0,
      y: 0,
      z: 0,
    },
    estadoCero: {
      rotateY: 0,
      x: 0,
      y: 0,
      z: 0,
    },
    estadoUno: {
      rotateY: 0.41,
      x: 0,
      y: -0.12,
      z: -0.35,
    },
    estadoDos: {
      x: 0.44,
      y: 0.42,
      z: -1.02,
    },
  };
  //{"groupPosition":{"x":0,"y":-0.12000000000000001,"z":-0.3599999999999999}}
  //{"groupRotation":{"x":0,"y":0.41000000000000014,"z":0}}
  //{"groupPosition":{"x":0.4400000000000002,"y":0.42000000000000026,"z":-1.0200000000000005}}

  return (
    <>
      <motion.group
        ref={orbitControlGroupRef}
        position={[groupPosition.x, groupPosition.y, groupPosition.z]}
        rotation={[groupRotation.x, groupRotation.y, groupRotation.z]}
        inicial={false}
        animate={cameraAnimation}
        variants={cameraVariant}
        transition={{ duration: 1, type: "spring" }}
      >
        <PerspectiveCamera makeDefault />;
      </motion.group>
    </>
  );
}

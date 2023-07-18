import { useTexture, useGLTF, Center, Clone } from "@react-three/drei";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { useState } from "react";

export default function Drone() {
  const drone_body = useGLTF("./model/drone_body.glb");
  const drone_head = useGLTF("./model/drone_head.glb");
  const drone_screen = useGLTF("./model/drone_screen.glb");

  const [dronePosition, setDronePosition] = useState(0);

  const droneVariant = {
    rounding: {
      x: [1, -1, -1, 1, 1],
      //y: [0],
      z: [1, 1, -1, -1, 1],
      rotateX: [Math.PI / 6, 0, -Math.PI / 6, 0, Math.PI / 6],
      rotateY: [0, Math.PI / 6, 0, -Math.PI / 6, 0],
      rotateZ: [0, Math.PI / 6, 0, -Math.PI / 6, 0],
      transition: {
        //rotateZ: {},
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        times: [],
      },
    },
    bouncing: {
      y: [0.4, 0, 0.4, 0, 0.4],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.group animate="bouncing" variants={droneVariant}>
      <motion.group animate="rounding" variants={droneVariant}>
        <primitive object={drone_body.scene} scale={0.05} />
        <primitive object={drone_head.scene} scale={0.05} />
        <primitive object={drone_screen.scene} scale={0.05} />
      </motion.group>
    </motion.group>
  );
}

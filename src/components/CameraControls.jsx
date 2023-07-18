import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";

export default function CameraControlsPrueba({ activeSection }) {
  const { choise, testCamera, testCameraRotation } = useControls({
    choise: { options: ["a", "b", "c"] },
    testCamera: { value: [0, 0, 0], step: 0.1 },
    testCameraRotation: { value: { x: 0, y: 0, z: 0 }, step: 0.1 },
  });
  //camera

  const { camera, size } = useThree();

  //camera.rotation.y += Math.PI;

  //move mouse event

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
    mouseParallax(delta);
  });

  //Camera animations
  let cameraAnimation = "estadoCero";

  switch (activeSection) {
    case 0:
      cameraAnimation = "estadoCero";
      break;
    case 1:
      cameraAnimation = "estadoOne";
      break;
    case 2:
      cameraAnimation = "estadoTwo";
      break;
    case 3:
      cameraAnimation = "estadoThree";
      break;
    case 4:
      cameraAnimation = "estadoFour";
      break;
    case 5:
      cameraAnimation = "estadoPruebas";
      break;
  }

  const cameraVariant = {
    estadoCero: {
      rotateY: Math.PI / 1.5,
      x: -0.4,
      y: -0.2,
      z: -0.7,
    },
    estadoOne: {
      rotateX: -0.5,
      rotateY: -1,
      rotateZ: -0.5,
      x: 0,
      y: 0,
      z: 0,
    },
    estadoTwo: {
      rotateY: Math.PI / 2,
      x: -0.4,
      y: 0.4,
      z: -1.2,
    },
    estadoThree: {
      rotateY: Math.PI / 2,
      x: -1,
      y: -0.4,
      z: -0.9,
    },
    estadoFour: {
      rotateY: Math.PI,
      x: 0.1,
      y: -0.6,
      z: 0.3,
    },
    estadoPruebas: {
      rotateY: testCameraRotation.y,
      rotateX: testCameraRotation.x,
      rotateZ: testCameraRotation.z,
      x: testCamera[0],
      y: testCamera[1],
      z: testCamera[2],
    },
  };

  return (
    <>
      <motion.group
        inicial={false}
        animate={cameraAnimation}
        variants={cameraVariant}
        transition={{ duration: 1, type: "spring" }}
      >
        <PerspectiveCamera makeDefault />
      </motion.group>
    </>
  );
}

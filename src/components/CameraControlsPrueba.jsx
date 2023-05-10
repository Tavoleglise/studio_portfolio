import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";

export default function CameraControlsPrueba({ activeSection }) {
  const { choise } = useControls({
    choise: { options: ["a", "b", "c"] },
  });
  //camera

  const { camera, size } = useThree();

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
  let cameraAnimation = "origen";
  if (activeSection === 1) {
    cameraAnimation = "estadoCero";
  } else if (activeSection === 2) {
    cameraAnimation = "estadoUno";
  } else if (activeSection === 3) {
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

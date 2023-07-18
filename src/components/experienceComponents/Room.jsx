import {
  useTexture,
  useGLTF,
  Center,
  Clone,
  Html,
  Float,
  PresentationControls,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import ScreenSprite from "../experienceComponents/ScreenSprite";

export default function Room() {
  const room = useGLTF("./model/estudio.glb");
  const fan = useGLTF("./model/fan.glb");
  const cubes = useGLTF("./model/cubes.glb");
  const furnitureTexture = useTexture("./texture/furniture.jpg");
  const objectsTexture = useTexture("./texture/objects.jpg");
  const roomTexture = useTexture("./texture/room_structure.jpg");
  const tvConsoleTexture = useTexture("./texture/tv_console.jpg");
  const objectsTexture2 = useTexture("./texture/objects2.jpg");
  const posters_flag_texture = useTexture(
    "./texture/posters_bandera_texture_baked.jpg"
  );
  furnitureTexture.flipY = false;
  objectsTexture.flipY = false;
  objectsTexture2.flipY = false;
  roomTexture.flipY = false;
  tvConsoleTexture.flipY = false;
  posters_flag_texture.flipY = false;

  console.log(room);

  const redCubeRef = useRef();
  const blueCubeRef = useRef();
  const greenCubeRef = useRef();

  console.log(cubes);

  const { cubesPosition, fanPosition } = useControls({
    cubesPosition: {
      value: [0, 0, 0],
      step: 1,
    },
    fanPosition: {
      value: 0,
      step: 0.1,
    },
  });

  return (
    <Center>
      <mesh
        position={room.nodes.room_structure.position}
        rotation={room.nodes.room_structure.rotation}
        geometry={room.nodes.room_structure.geometry}
      >
        <meshBasicMaterial map={roomTexture} />
      </mesh>
      <mesh
        position={room.nodes.objects.position}
        rotation={room.nodes.objects.rotation}
        geometry={room.nodes.objects.geometry}
      >
        <meshBasicMaterial map={objectsTexture} />
      </mesh>
      <mesh
        position={room.nodes.furniture.position}
        rotation={room.nodes.furniture.rotation}
        geometry={room.nodes.furniture.geometry}
      >
        <meshBasicMaterial map={furnitureTexture} />
      </mesh>
      <mesh
        position={room.nodes.console_tv.position}
        rotation={room.nodes.console_tv.rotation}
        geometry={room.nodes.console_tv.geometry}
      >
        <meshBasicMaterial map={tvConsoleTexture} />
      </mesh>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={0.3}
        rotation-y={Math.PI}
        position={room.nodes.screen_tv.position}
      >
        <iframe src="https://fiber-marble-game.vercel.app/" />
      </Html>

      <mesh
        position={room.nodes.box.position}
        rotation={room.nodes.box.rotation}
        geometry={room.nodes.box.geometry}
      >
        <meshBasicMaterial map={objectsTexture} side={THREE.DoubleSide} />
      </mesh>

      <mesh
        position={room.nodes.plant.position}
        rotation={room.nodes.plant.rotation}
        geometry={room.nodes.plant.geometry}
      >
        <meshBasicMaterial map={objectsTexture2} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        position={room.nodes.posters_bandera.position}
        rotation={room.nodes.posters_bandera.rotation}
        geometry={room.nodes.posters_bandera.geometry}
      >
        <meshBasicMaterial map={posters_flag_texture} side={THREE.DoubleSide} />
      </mesh>
      <group
        rotation={[0, -19.6, 0]}
        position={[
          fan.nodes.fan_body.position.x,
          fan.nodes.fan_body.position.y,
          fan.nodes.fan_body.position.z + 0.05,
        ]}
      >
        <mesh
          rotation={fan.nodes.fan_body.rotation}
          geometry={fan.nodes.fan_body.geometry}
        >
          <meshBasicMaterial map={objectsTexture} side={THREE.DoubleSide} />
        </mesh>
        <motion.mesh
          animate={{ rotateX: Math.PI }}
          transition={{
            //rotateZ: {},
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          rotation={fan.nodes.fan_pieces.rotation}
          geometry={fan.nodes.fan_pieces.geometry}
        >
          <meshBasicMaterial map={objectsTexture} side={THREE.DoubleSide} />
        </motion.mesh>
      </group>

      <Float rotationIntensity={0.1} speed={10} floatingRange={[0.01, -0.1]}>
        <mesh
          geometry={cubes.nodes.cube_blue.geometry}
          position={cubes.nodes.cube_blue.position}
          position-y={cubes.nodes.cube_blue.position.y + 0.2}
          material={cubes.nodes.cube_blue.material}
          scale={cubes.nodes.cube_blue.scale}
          ref={blueCubeRef}
        />
      </Float>
      <Float rotationIntensity={0.1} speed={10} floatingRange={[0.01, -0.1]}>
        <mesh
          geometry={cubes.nodes.cube_red.geometry}
          position={cubes.nodes.cube_red.position}
          position-y={cubes.nodes.cube_red.position.y + 0.2}
          material={cubes.nodes.cube_red.material}
          scale={cubes.nodes.cube_red.scale}
          ref={redCubeRef}
        />
      </Float>
      <Float rotationIntensity={0.1} speed={10} floatingRange={[0.01, -0.1]}>
        <mesh
          geometry={cubes.nodes.cube_green.geometry}
          position={cubes.nodes.cube_green.position}
          position-y={cubes.nodes.cube_green.position.y + 0.2}
          material={cubes.nodes.cube_green.material}
          scale={cubes.nodes.cube_green.scale}
          ref={greenCubeRef}
        />
      </Float>

      <ScreenSprite
        screenPosition={room.nodes.screen.position}
        screenRotation={room.nodes.screen.rotation}
      />
    </Center>
  );
}

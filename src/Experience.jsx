import {
  useTexture,
  useGLTF,
  Center,
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import CameraControlsPrueba from "./components/CameraControls";
import {
  Pixelation,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";

import { Perf } from "r3f-perf";

import Exterior from "./components/experienceComponents/Exterior";
import Drone from "./components/experienceComponents/Drone";
import Room from "./components/experienceComponents/Room";

export default function Experience({ activeSection, cameraType }) {
  const { nodes } = useGLTF("./model/estudio_v2.glb");

  const { geometryPosition, sunPosition } = useControls({
    sunPosition: { value: [1, 2, 3] },
    inclination: {
      value: 0,
      step: 1,
    },
    geometryPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    cameraType: false,
  });
  const bakedTexture = useTexture("./model/objects_baked.jpg");

  const walls_floorTexture = useTexture("./model/walls_floor_bake.jpg");

  bakedTexture.flipY = false;
  walls_floorTexture.flipY = false;
  return (
    <>
      <Perf />
      {/*
        <EffectComposer multisampling={4}>
          <DepthOfField
            focusDistance={0.001}
            focalLength={0.3}
            bokehScale={6}
          />
        </EffectComposer>
  */}
      ;
      <color args={["#030202"]} attach="background" />
      {cameraType === 1 ? (
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.8}
          enablePan={false}
          maxDistance={0.5}
          minDistance={0}
        />
      ) : (
        <CameraControlsPrueba activeSection={activeSection} />
      )}
      <Environment background files="./hdri/cloudy.hdr" />
      <ambientLight intensity={0.05} />
      <directionalLight intensity={1} position={sunPosition} />
      <group>
        <Exterior />
        {/*<Drone />*/}
        <Room />
      </group>
    </>
  );
}

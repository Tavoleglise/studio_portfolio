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
import CameraControls from "./components/CameraControls";
import CameraControlsPrueba from "./components/CameraControlsPrueba";
import {
  Pixelation,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";

import { Perf } from "r3f-perf";

import Exterior from "./components/experienceComponents/Exterior";

export default function Experience({ activeSection, cameraType }) {
  const { nodes } = useGLTF("./model/estudio_v2.glb");

  const {
    geometryPosition,
    geometryRotation,
    exteriorPosition,
    inclination,
    sunPosition,
  } = useControls({
    sunPosition: { value: [1, 2, 3] },
    inclination: {
      value: 0,
      step: 1,
    },
    exteriorPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    geometryPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    geometryRotation: {
      value: { x: 0, y: -1.57, z: 0 },
      step: 0.01,
    },
    cubePosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    cameraType: false,
  });
  const bakedTexture = useTexture("./model/baked.jpg");
  const objectTexture = useTexture("./model/objects_baked.jpg");
  const walls_floorTexture = useTexture("./model/walls_floor_bake.jpg");
  bakedTexture.flipY = false;
  objectTexture.flipY = false;
  walls_floorTexture.flipY = false;
  return (
    <>
      <Perf />
      <color args={["#030202"]} attach="background" />
      {cameraType === 1 ? (
        <OrbitControls
          autoRotate={false}
          autoRotateSpeed={0.8}
          enablePan={false}
          maxDistance={1.5}
          minDistance={0}
        />
      ) : (
        <CameraControlsPrueba activeSection={activeSection} />
      )}

      {/*<axesHelper args={[5]} />*/}
      {/*<Environment background files="./hdri/belfast_sunset_puresky_4k.hdr" />*/}
      <ambientLight intensity={0.05} />
      <directionalLight intensity={1} position={sunPosition} />
      <Sky
        sunPosition={sunPosition}
        inclination={0}
        azimuth={0.25}
        elevation={90}
      />

      <group
        position={[geometryPosition.x, geometryPosition.y, geometryPosition.z]}
        rotation-y={geometryRotation.y}
      >
        <Exterior />
        {
          <Center>
            <mesh geometry={nodes.bakedMesh.geometry}>
              <meshBasicMaterial map={objectTexture} />
            </mesh>
            <mesh geometry={nodes.walls_floorMesh.geometry}>
              <meshBasicMaterial map={walls_floorTexture} />
            </mesh>
            <mesh
              geometry={nodes.screenMesh.geometry}
              rotation={nodes.screenMesh.rotation}
            />
            <mesh
              geometry={nodes.boxMesh.geometry}
              rotation={nodes.boxMesh.rotation}
            >
              <meshBasicMaterial map={objectTexture} side={THREE.DoubleSide} />
            </mesh>
          </Center>
        }
      </group>
    </>
  );
}

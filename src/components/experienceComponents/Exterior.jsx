import { useTexture, useGLTF, Center, Clone } from "@react-three/drei";

import { useControls } from "leva";

export default function Exterior() {
  const {
    house1Position,
    house2Position,
    house3Position,

    house4Position,
    exteriorPosition,
    sideWalkPos,
  } = useControls({
    exteriorPosition: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    house1Position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    house2Position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    house3Position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },

    house4Position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    sideWalkPos: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
  });
  const house1 = useGLTF("./model/house1.glb");
  const house2 = useGLTF("./model/house2.glb");
  const sideWalk = useGLTF("./model/sideWalk.glb");
  return (
    <group
      position={[exteriorPosition.x, exteriorPosition.y, exteriorPosition.z]}
    >
      <Clone position={[0, 0, 0]} scale={1} object={house2.scene} />
      <Clone position={[-6, 0, 0]} scale={1} object={house2.scene} />
      <Clone position={[6, 0, 0]} scale={1} object={house2.scene} />
      <Clone position={[12, 0, 0]} scale={1} object={house2.scene} />
      <Clone position={[18, 0, 0]} scale={1} object={house2.scene} />

      <primitive
        position={[sideWalkPos.x, sideWalkPos.y, sideWalkPos.z]}
        scale={1}
        object={sideWalk.scene}
      />
    </group>
  );
}

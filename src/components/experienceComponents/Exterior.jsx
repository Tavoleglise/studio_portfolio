import { useTexture, useGLTF, Center, Clone } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

export default function Exterior() {
  const bg = useGLTF("./model/bg.glb");
  const mountainTexture = useTexture("./texture/mountain_bg.png");

  const buildings = useGLTF("./model/exterior_buildings.glb");
  const closest_buildings_texture = useTexture(
    "./texture/closest_building_texture.jpg"
  );
  const farest_buildings_texture = useTexture(
    "./texture/farest_building_texture.jpg"
  );

  mountainTexture.flipY = false;
  closest_buildings_texture.flipY = false;
  farest_buildings_texture.flipY = false;

  const { mountainPos, mountainRot } = useControls({
    mountainPos: { value: [1, 1, 1], step: 1 },
    mountainRot: { value: [1, 1, 1], step: 0.1 },
  });

  return (
    <group position={[-1, -1, -1]}>
      <mesh
        position={buildings.nodes.closest_buildings.position}
        geometry={buildings.nodes.closest_buildings.geometry}
      >
        <meshBasicMaterial map={closest_buildings_texture} />
      </mesh>
      <mesh
        position={buildings.nodes.far_buildings2.position}
        geometry={buildings.nodes.far_buildings2.geometry}
      >
        <meshBasicMaterial map={farest_buildings_texture} />
      </mesh>
      <mesh
        rotation={bg.nodes.bg.rotation}
        position={bg.nodes.bg.position}
        geometry={bg.nodes.bg.geometry}
      >
        <meshBasicMaterial
          map={mountainTexture}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

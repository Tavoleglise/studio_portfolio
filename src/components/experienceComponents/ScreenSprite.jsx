import { DoubleSide } from "three";
import { useControls } from "leva";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ScreenSprite({ screenPosition, screenRotation }) {
  let currentTile = 0;
  const tilesHoriz = 4;
  const tilesVert = 3;
  const sprite_texture = useTexture("./texture/screen_sprite.JPG");
  sprite_texture.repeat.set(1 / tilesHoriz, 1 / tilesVert);
  sprite_texture.offset.x = (currentTile % tilesHoriz) / tilesHoriz;
  sprite_texture.offset.y =
    (tilesVert - Math.floor(currentTile / tilesHoriz) - 1) / tilesVert;
  const { planeposition } = useControls({
    planeposition: {
      value: [0, 0.5, 0],
      step: 0.5,
    },
  });

  let playSpriteIndices = [];
  let runningTileArrayIndex = 0;
  let maxDisplayTime = 2 / 12;
  let elapsedTime = 0;

  const loop = (playSpriteIndices, totalDuration) => {};

  useFrame((state, delta) => {
    elapsedTime += delta;
    if (maxDisplayTime > 0 && elapsedTime >= maxDisplayTime) {
      elapsedTime = 0;
      currentTile++;
    }
    if (currentTile == 11) {
      currentTile = 0;
    }
    sprite_texture.offset.x = (currentTile % tilesHoriz) / tilesHoriz;
    sprite_texture.offset.y =
      (tilesVert - Math.floor(currentTile / tilesHoriz) - 1) / tilesVert;
  });
  return (
    <mesh
      position={screenPosition}
      rotation={screenRotation}
      rotation-y={screenRotation.y + Math.PI / 2}
      //rotation={[Math.PI / 2, 0, 0]}
      scale={[0.65, 0.33, 1]}
    >
      <planeBufferGeometry />

      <meshBasicMaterial map={sprite_texture} side={DoubleSide} />
    </mesh>
  );
}

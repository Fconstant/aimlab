import { SceneGround } from "./Ground";
import { SceneSky } from "./Sky";
import { ShootingRange } from "./ShootingRange";

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#851dca" />
      <directionalLight
        color="#F0F0F0"
        position={[0, 10, 0]}
        castShadow
        intensity={0.5}
      />

      <SceneSky />

      <SceneGround />
      <ShootingRange />
    </>
  );
};

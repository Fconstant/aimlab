import { SceneGround } from "./Ground";
import { SceneSky } from "./Sky";
import { ShootingRange } from "./ShootingRange";

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight color="#E0B0E0" position={[0, 10, 0]} castShadow />

      <SceneSky />

      <SceneGround />
      <ShootingRange />
    </>
  );
};

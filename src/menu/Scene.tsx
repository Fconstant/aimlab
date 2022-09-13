import { SceneGround } from "./Ground";
import { useColorTransition } from "./useColorTransition";

export const Scene = () => {
  useColorTransition();

  return (
    <>
      <ambientLight intensity={0.3} />
      {/* <pointLight position={[0, 0, 0]} color="white" /> */}
      <directionalLight color="white" position={[0, 10, 0]} />
      <SceneGround />
    </>
  );
};

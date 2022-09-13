import { useThree } from "@react-three/fiber";
import { SceneGround } from "./Ground";

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[0, 0, 0]} color="white" /> */}
      <directionalLight color="white" position={[0, 10, 0]} castShadow />
      <SceneGround />
    </>
  );
};

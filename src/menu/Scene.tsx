import { Text3D } from "@react-three/drei";
import { SceneGround } from "./Ground";
import { useColorTransition } from "./useColorTransition";
import fontJson from "../assets/Inter.Bold.json";
import { GroundColor } from "./Scene.Colors";

export const Scene = () => {
  useColorTransition();

  return (
    <>
      <ambientLight intensity={0.3} />
      {/* <pointLight position={[0, 0, 0]} color="white" /> */}
      <directionalLight color="white" position={[0, 10, 0]} />

      <Text3D
        font={fontJson as any}
        bevelSegments={2}
        position={[-7, 0, -10]}
        castShadow
        receiveShadow
      >
        Work in Progress ;D
        <meshToonMaterial color={GroundColor} wireframeLinewidth={0.5} />
      </Text3D>
      <SceneGround />
    </>
  );
};

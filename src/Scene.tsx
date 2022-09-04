import { Canvas } from "@react-three/fiber";
import { Provider as JotaiProvider } from "jotai";
import { useMouseRegister } from "./hooks/useMouseRegister";
import { SceneControls } from "./Scene.Controls";
import { SceneGround } from "./Scene.Ground";
import { SceneLightning } from "./Scene.Lightning";
import { SceneSky } from "./Scene.Sky";
import { ShootingRange } from "./shooting-range/ShootingRange";

export const Scene = () => (
  <Canvas>
    <JotaiProvider>
      <SceneContent />
    </JotaiProvider>
  </Canvas>
);

const SceneContent = () => {
  const { registerMouse } = useMouseRegister();
  return (
    <group onClick={registerMouse}>
      <SceneLightning />
      <SceneSky />
      <SceneGround />
      <SceneControls />
      <ShootingRange />
    </group>
  );
};

import { Canvas } from "@react-three/fiber";
import { Provider as JotaiProvider } from "jotai";
import { SceneControls } from "./Scene.Controls";
import { SceneGround } from "./Scene.Ground";
import { SceneSky } from "./Scene.Sky";
import { ShootingRange } from "@app/shooting-range";
import { PerspectiveCamera } from "@react-three/drei";
import { Crosshair } from "./Crosshair";
import DebugControl, { DebugGizmo } from "./debug";

export const Scene = () => (
  <Canvas shadows>
    <JotaiProvider>
      <SceneContent />
    </JotaiProvider>
  </Canvas>
);

const SceneContent = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight color="white" position={[0, 10, 0]} castShadow />

      <SceneSky />
      <SceneControls />

      <PerspectiveCamera />
      <Crosshair />

      <DebugControl />
      <DebugGizmo />

      <SceneGround />
      <ShootingRange />
    </>
  );
};

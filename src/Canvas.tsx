import { SceneManager } from "./scene-manager";
import { Provider as JotaiProvider } from "jotai";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import IncludeDebug from "./debug";
import { PerspectiveCamera } from "@react-three/drei";
import { Crosshair } from "./crosshair";

export const Canvas = () => {
  return (
    <ThreeCanvas shadows>
      <JotaiProvider>
        <IncludeDebug />
        <PerspectiveCamera args={[60]} />
        <Crosshair />
        <SceneManager />
      </JotaiProvider>
    </ThreeCanvas>
  );
};

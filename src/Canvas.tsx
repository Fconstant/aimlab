import { SceneManager } from "./scene-manager";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import IncludeDebug from "./debug";
import { PerspectiveCamera, useContextBridge } from "@react-three/drei";
import HUD from "./hud";
import { useState } from "react";

export const Canvas = () => {
  const [loaded, setLoaded] = useState(false);
  useContextBridge();
  return (
    <>
      {loaded && <HUD />}
      <ThreeCanvas shadows onCreated={() => setLoaded(true)}>
        <IncludeDebug />
        <PerspectiveCamera args={[60]} />
        <SceneManager />
      </ThreeCanvas>
    </>
  );
};

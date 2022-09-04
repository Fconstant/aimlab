import {
  FirstPersonControls,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { type FirstPersonControls as FirstPersonControlImpl } from "three-stdlib";
import { useOnKeyPress } from "./hooks/useOnKeyPress";
import { useControlMode, useMouseControlData } from "./store/Controls.store";
import { useSceneData } from "./store/Scene.store";

export const SceneControls = () => {
  const fpvRef = useRef<FirstPersonControlImpl | null>(null);

  const { playerPos } = useSceneData();
  const [controlMode, toggleControlMode] = useControlMode();
  const [{ registered: mouseRegistered }] = useMouseControlData();

  useOnKeyPress(() => {
    toggleControlMode();
  }, "toggleControls");

  useEffect(() => {
    if (controlMode === "first-person") {
      fpvRef.current?.object.position.copy(playerPos);
    }
  }, [controlMode, playerPos]);

  return (
    <>
      <PerspectiveCamera />
      {controlMode === "first-person" && (
        <FirstPersonControls
          ref={fpvRef}
          position={playerPos}
          lookSpeed={0.2}
          constrainVertical
          heightSpeed
          activeLook={mouseRegistered}
          movementSpeed={0}
        />
      )}
      {controlMode === "free-look" && <OrbitControls />}
    </>
  );
};

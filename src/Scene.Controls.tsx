import { FirstPersonControls, PointerLockControls } from "@react-three/drei";
import { type PointerLockControls as ThreePointerLockControls } from "three-stdlib";
import { useEffect, useRef } from "react";
import { useOnKeyPress } from "./hooks/useOnKeyPress";
import { useControlMode } from "./store/Controls.store";
import { useSceneData } from "./store/Scene.store";
import { useThree } from "@react-three/fiber";

export const SceneControls = () => {
  const lockControlsRef = useRef<ThreePointerLockControls | null>(null);
  const { playerPos, shootingGridPos } = useSceneData();
  const [controlMode, toggleControlMode] = useControlMode();
  const { camera } = useThree();

  useOnKeyPress(() => {
    toggleControlMode();
  }, "toggleControls");

  useEffect(() => {
    if (controlMode === "first-person") {
      camera.position.set(...playerPos.clone().toArray());
      camera.lookAt(shootingGridPos);
    }
  }, [controlMode]);

  return (
    <>
      {controlMode === "free-look" && (
        <FirstPersonControls lookSpeed={0.2} heightSpeed movementSpeed={2} />
      )}
      {controlMode === "first-person" && (
        <PointerLockControls ref={lockControlsRef} />
      )}
    </>
  );
};

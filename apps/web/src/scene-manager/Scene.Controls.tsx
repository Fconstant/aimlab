import { FirstPersonControls, PointerLockControls } from "@react-three/drei";
import { useEffect } from "react";
import { useOnKeyPress } from "@app/hooks/useOnKeyPress";
import { useControls } from "@app/store/Controls.store";
import { usePositionData } from "@app/store/Positions.store";
import { useThree } from "@react-three/fiber";

export const SceneControls = () => {
  const { playerPos, shootingGridPos } = usePositionData();
  const {
    controlMode: [controlMode, toggleControlMode],
    lockState: [, toggleLockState],
  } = useControls();
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
        <PointerLockControls
          onLock={() => toggleLockState(true)}
          onUnlock={() => toggleLockState(false)}
        />
      )}
    </>
  );
};

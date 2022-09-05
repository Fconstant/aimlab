import { useDebugState } from "@app/store/Debug.store";
import { GizmoHelper, GizmoViewcube, GizmoViewport } from "@react-three/drei";

export const DebugGizmo = () => {
  if (!useDebugState().isEnabled) return null;
  return (
    <>
      <GizmoHelper
        alignment="bottom-left" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
    </>
  );
};

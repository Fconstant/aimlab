import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { OnlyDebug } from "./OnlyDebug";

export const DebugGizmo = () => {
  return (
    <OnlyDebug>
      <GizmoHelper
        alignment="bottom-left" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
    </OnlyDebug>
  );
};

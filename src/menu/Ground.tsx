import { usePositionData } from "@app/store/Positions.store";
import { useLayoutEffect, useRef } from "react";
import { PointsMaterial } from "three";
import { GroundColor } from "./Scene.Colors";
// import { useVertices } from "./useVertices";

const PLANE_SIZE = [20, 20] as [number, number];

export const SceneGround = () => {
  const { groundPos } = usePositionData();
  const pointsMaterialRef = useRef<PointsMaterial>(null);

  useLayoutEffect(() => {
    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.color = GroundColor;
    }
  }, [pointsMaterialRef.current]);

  return (
    <points position={groundPos} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[...PLANE_SIZE, 64, 64]} />
      <pointsMaterial
        ref={pointsMaterialRef}
        args={[
          {
            color: GroundColor,
          },
        ]}
        colorWrite
        size={0.05}
      />
    </points>
  );
};

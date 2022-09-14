import { usePositionData } from "@app/store/Positions.store";
import { MeshDistortMaterial } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import { PointsMaterial, Vector3 } from "three";
import { GroundColor } from "./Scene.Colors";
// import { useVertices } from "./useVertices";

const PLANE_SIZE = [20, 20] as [number, number];

export const SceneGround = () => {
  const { groundPos } = usePositionData();
  const position = useMemo(
    () => groundPos.clone().add(new Vector3(0, 1, 0)),
    [...groundPos.toArray()]
  );
  const pointsMaterialRef = useRef<PointsMaterial>(null);

  useLayoutEffect(() => {
    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.color = GroundColor;
    }
  }, [pointsMaterialRef.current]);

  return (
    <points
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow={false}
    >
      <planeGeometry args={[...PLANE_SIZE, 96, 96]} />
      <MeshDistortMaterial
        ref={pointsMaterialRef}
        color={GroundColor}
        distort={0.4}
        speed={2}
      />
    </points>
  );
};

import { usePositionData } from "@app/store/Positions.store";
import { Point, Points, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useVertices } from "./useVertices";

const SphereMat = <meshStandardMaterial color="white" />;

export const SceneGround = () => {
  const { groundPos } = usePositionData();
  const vertPos = useVertices(50, 50);

  useFrame(() => {});
  return (
    <Points
      limit={500}
      range={500}
      position={groundPos.clone().add(new Vector3(0, -10, 0))}
    >
      <pointsMaterial vertexColors />
      {vertPos.map((pos) => (
        <Sphere args={[0.5, 8, 8]} position={pos}>
          {SphereMat}
        </Sphere>
      ))}
    </Points>
  );
};

/* <points position={groundPos} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[...PLANE_SIZE, ...PLANE_SEGMENTS]} />
        <pointsMaterial vertexColors />
       </points> */

import { usePositionData } from "@app/store/Positions.store";
import { Plane } from "@react-three/drei";

const PLANE_SIZE = [20, 20] as [number, number];

export const SceneGround = () => {
  const { groundPos } = usePositionData();
  return (
    <>
      <Plane
        args={[...PLANE_SIZE]}
        position={groundPos}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial roughness={0.7} metalness={0.5} color="#E2E2E2" />
      </Plane>
    </>
  );
};

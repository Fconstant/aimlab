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
      >
        <meshStandardMaterial roughness={0.8} metalness={0.2} color="#448414" />
      </Plane>
    </>
  );
};

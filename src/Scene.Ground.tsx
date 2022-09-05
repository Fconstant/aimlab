import { Plane } from "@react-three/drei";
import { useSceneData } from "./store/Scene.store";

const PLANE_SIZE = [20, 20] as [number, number];

export const SceneGround = () => {
  const { groundPos } = useSceneData();
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

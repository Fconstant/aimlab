import { ContactShadows, Plane, TransformControls } from "@react-three/drei";
import { Euler, Vector3 } from "three";
import { useSceneData } from "./store/Scene.store";

const PLANE_SIZE = [20, 20] as [number, number];

export const SceneGround = () => {
  const { groundPos } = useSceneData();
  return (
    <>
      {/* <ContactShadows frames={1} position={groundPos} blur={1} opacity={0.6} /> */}
      <Plane
        args={[...PLANE_SIZE]}
        position={groundPos}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#448414" />
      </Plane>
    </>
  );
};

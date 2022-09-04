import { ContactShadows, Plane, TransformControls } from "@react-three/drei";
import { Euler, Vector3 } from "three";
import { useSceneData } from "./store/Scene.store";

const PLANE_SIZE = [10, 10] as [number, number];

export const SceneGround = () => {
  const { groundPos } = useSceneData();
  return (
    <>
      <ContactShadows frames={1} position={groundPos} blur={1} opacity={0.6} />
      <Plane
        args={[...PLANE_SIZE]}
        position={groundPos.clone().add(new Vector3(0, 0.1, 0))}
        rotation={[Math.PI / 2, Math.PI, 0]}
      >
        <meshBasicMaterial color="lightblue" />
      </Plane>
    </>
  );
};

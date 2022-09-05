import { DebugPoint } from "@app/debug/DebugPoint";
import { useDebugState } from "@app/store/Debug.store";
import { Sphere } from "@react-three/drei";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Color, Material, Mesh, MeshStandardMaterial } from "three";

interface TargetProps {
  position: Vector3;
  radius: number;
  show: boolean;
  debugData?: string;
}

const TargetMaterial = (
  <meshStandardMaterial color="#7bca18" roughness={0.5} metalness={0.1} />
);
const NoTargetMaterial = (
  <meshBasicMaterial wireframe color="white" wireframeLinewidth={0.1} />
);

export const Target = ({
  position,
  radius,
  show = true,
  debugData,
}: TargetProps) => {
  const sphereRef = useRef<Mesh>();
  const [pointed, setPointed] = useState(false);
  const { isEnabled: isDebug } = useDebugState();

  const onShoot = () => {
    const mat = sphereRef.current?.material;
    if (mat instanceof MeshStandardMaterial) {
      mat.color = new Color("red");
    }
  };

  useFrame(() => {
    sphereRef.current?.scale.setScalar(pointed ? 1.1 : 1);
  });

  if (!show && !isDebug) {
    return null;
  }
  return (
    <Sphere
      ref={sphereRef}
      args={[radius, 16, 16]}
      position={position}
      castShadow={show}
      receiveShadow={show}
      onClick={onShoot}
      onPointerEnter={() => setPointed(true)}
      onPointerLeave={() => setPointed(false)}
    >
      {show ? TargetMaterial : NoTargetMaterial}
      {debugData && <DebugPoint label={debugData} position={0} />}
    </Sphere>
  );
};

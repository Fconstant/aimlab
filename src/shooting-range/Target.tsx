import { DebugPoint } from "@app/debug";
import { Sphere } from "@react-three/drei";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Color, Mesh, MeshStandardMaterial } from "three";

interface TargetProps {
  position: Vector3;
  radius: number;
  show: boolean;
  debugData?: string;
  onShoot?: () => void;
}

const TargetMaterial = (
  <meshStandardMaterial color="#7bca18" roughness={0.5} metalness={0.1} />
);

export const Target = ({
  position,
  radius,
  show = true,
  debugData,
  onShoot,
}: TargetProps) => {
  const sphereRef = useRef<Mesh>();
  const [pointed, setPointed] = useState(false);

  // const handleClick = () => {
  //   const mat = sphereRef.current?.material;
  //   if (mat instanceof MeshStandardMaterial) {
  //     mat.color = new Color("red");
  //     onShoot?.();
  //   }
  // };

  useFrame(() => {
    sphereRef.current?.scale.setScalar(pointed ? 1.1 : 1);
  });

  return (
    <Sphere
      ref={sphereRef}
      args={[radius, 16, 16]}
      position={position}
      castShadow={show}
      receiveShadow={show}
      visible={show}
      onClick={onShoot}
      onPointerEnter={() => setPointed(true)}
      onPointerLeave={() => setPointed(false)}
    >
      {TargetMaterial}
      {debugData && <DebugPoint label={debugData} position={0} />}
    </Sphere>
  );
};

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
  <meshStandardMaterial color="#18a2ca" roughness={0.2} metalness={0} />
);

export const Target = ({
  position,
  radius,
  show = true,
  debugData,
  onShoot,
}: TargetProps) => {
  const sphereRef = useRef<Mesh>();
  const pointedRef = useRef(false);

  // const handleClick = () => {
  //   const mat = sphereRef.current?.material;
  //   if (mat instanceof MeshStandardMaterial) {
  //     mat.color = new Color("red");
  //     onShoot?.();
  //   }
  // };

  useFrame(() => {
    sphereRef.current?.scale.setScalar(pointedRef.current ? 1.1 : 1);
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
      onPointerEnter={() => (pointedRef.current = true)}
      onPointerLeave={() => (pointedRef.current = false)}
    >
      {TargetMaterial}
      {debugData && <DebugPoint label={debugData} position={0} />}
    </Sphere>
  );
};

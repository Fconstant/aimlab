import { DebugPoint } from "@app/debug";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils, Mesh, MeshPhysicalMaterial } from "three";

interface TargetProps {
  position: Vector3;
  radius: number;
  show: boolean;
  debugData?: string;
  onShoot?: () => void;
}

const DEFAULT_ROUGHNESS = 0.7;
const DEFAULT_METALNESS = 0.5;

const useTargetMaterial = () => {
  return useMemo(
    () => (
      <MeshDistortMaterial
        attach="material"
        color="#18a2ca"
        roughness={DEFAULT_ROUGHNESS}
        metalness={DEFAULT_METALNESS}
        distort={0.2} // Strength, 0 disables the effect (default=1)
        speed={MathUtils.randFloat(2, 5)} // Speed (default=1)
      />
    ),
    []
  );
};

export const Target = ({
  position,
  radius,
  show = true,
  debugData,
  onShoot,
}: TargetProps) => {
  const sphereRef = useRef<Mesh>();
  const pointedRef = useRef(false);

  const TargetMaterial = useTargetMaterial();

  useFrame(() => {
    const isPointing = pointedRef.current;
    if (sphereRef.current) {
      const { scale, material: rawMaterial } = sphereRef.current;
      const material = rawMaterial as MeshPhysicalMaterial;

      scale.setScalar(isPointing ? 1.1 : 1);
      material.metalness = isPointing ? 0.7 : DEFAULT_METALNESS;
      material.roughness = isPointing ? 0.5 : DEFAULT_ROUGHNESS;
    }
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
      {debugData && <DebugPoint label={debugData} position={[0, 0, 0]} />}
    </Sphere>
  );
};

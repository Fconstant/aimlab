import { Sphere } from "@react-three/drei";
import { useShootingRangeTargets } from "../store/ShootingRange.store";

export const ShootingRange = () => {
  const { matrix, origin, targetRadius } = useShootingRangeTargets();
  return (
    <group position={origin}>
      {matrix.map((rowValues, columnNo) =>
        rowValues.map((targetData, rowNo) => (
          <Sphere
            key={"target:" + [columnNo, rowNo].toString()}
            args={[targetRadius]}
            position={targetData.pos}
            castShadow
            receiveShadow
          >
            <meshBasicMaterial color="#7bca18" />
          </Sphere>
        ))
      )}
    </group>
  );
};

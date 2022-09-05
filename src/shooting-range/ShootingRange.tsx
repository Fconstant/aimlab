import { useShootingRangeTargets } from "@app/store/ShootingRange.store";
import { DebugPoint } from "@app/debug";
import { Target } from "./Target";
import { Center } from "@react-three/drei";

export const ShootingRange = () => {
  const {
    matrix,
    origin,
    targetRadius: defaultRadius,
  } = useShootingRangeTargets();
  return (
    <>
      <DebugPoint label="origin" position={origin.clone()} />
      <Center position={origin}>
        {matrix.map((rowValues, columnNo) =>
          rowValues.map((targetData, rowNo) => (
            <Target
              key={"target:" + [columnNo, rowNo].toString()}
              position={targetData.pos}
              radius={targetData.radius ?? defaultRadius}
              show={targetData.hasTarget}
              debugData={[targetData.pos.x, targetData.pos.y]
                .map((e) => e.toFixed())
                .toString()}
            />
          ))
        )}
      </Center>
    </>
  );
};

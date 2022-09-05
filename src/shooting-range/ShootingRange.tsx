import { useShootingRange } from "@app/store/ShootingRange.store";
import { DebugPoint } from "@app/debug";
import { Target } from "./Target";
import { Center } from "@react-three/drei";

export const ShootingRange = () => {
  const {
    matrix,
    origin,
    target: { radius },
    isRendered,
    destroyTarget,
  } = useShootingRange();

  return (
    <>
      <DebugPoint label="origin" position={origin.clone()} />
      <Center position={origin}>
        {matrix.map((rowValues, columnNo) =>
          rowValues.map((pos, rowNo) => (
            <Target
              key={"target:" + [columnNo, rowNo].toString()}
              position={pos}
              radius={radius}
              show={isRendered(columnNo, rowNo)}
              onShoot={() => destroyTarget([columnNo, rowNo])}
              debugData={[pos.x, pos.y].map((e) => e.toFixed()).toString()}
            />
          ))
        )}
      </Center>
    </>
  );
};

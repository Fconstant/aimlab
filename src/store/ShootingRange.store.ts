import { atom, useAtomValue } from "jotai";
import { Vector3 } from "three";
import { SceneAtom } from "@app/store/Scene.store";

const ShootingRangeAtom = atom((get) => {
  const targetRadius = 0.5;
  const gap = 1;
  return {
    position: get(SceneAtom).shootingGridPos,
    grid: {
      gap: Math.max(targetRadius, gap),
      size: [5, 4] as [number, number],
    },
    target: {
      radius: 0.5,
    },
  };
});

export interface Target {
  pos: Vector3;
  hasTarget: boolean;
  radius?: number;
}

const TargetMatrixAtom = atom((get) => {
  const { position: origin, grid, target } = get(ShootingRangeAtom);

  const [columns, rows] = grid.size;
  const matrix = Array(columns)
    .fill(0)
    .map((_, columnNum) =>
      Array(rows)
        .fill(0)
        .map((_, rowNum) => {
          const pos = new Vector3(
            columnNum * target.radius + grid.gap * columnNum,
            rowNum * target.radius + grid.gap * rowNum,
            0
          );
          return {
            hasTarget: columnNum === rowNum,
            pos,
          } as Target;
        })
    );
  return { matrix, size: grid.size, origin, targetRadius: target.radius };
});

export const useShootingRangeStore = () => useAtomValue(ShootingRangeAtom);
export const useShootingRangeTargets = () => useAtomValue(TargetMatrixAtom);

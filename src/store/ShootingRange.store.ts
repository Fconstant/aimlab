import { atom, useAtomValue } from "jotai";
import { Vector2, Vector3 } from "three";
import { SceneAtom } from "./Scene.store";

const ShootingRangeAtom = atom((get) => ({
  position: get(SceneAtom).shootingGridPos,
  grid: {
    gap: 2,
    size: [3, 3] as [number, number],
  },
  target: {
    radius: 1,
    get diameter() {
      return this.radius * 2;
    },
  },
}));

const ComputedGridValuesAtom = atom((get) => {
  const {
    position: origin,
    grid: {
      size: [xSize, ySize],
      gap,
    },
    target,
  } = get(ShootingRangeAtom);
  const targetSize = target.diameter;
  const area = new Vector2(
    targetSize * xSize + (xSize - 1 * gap),
    targetSize * ySize + (ySize - 1 * gap)
  );

  const startingPointVec = area
    .clone()
    .divideScalar(2)
    .rotateAround(new Vector2(origin.x, origin.y), Math.PI / 4); // rotate 90deg

  const firstItemPosition = startingPointVec.clone().negate();

  return { area, firstItemPosition };
});

function findTargetActualPosition(
  gridArea: Vector2,
  firstItemPosition: Vector2,
  target: [number, number],
  numOfItems: [number, number]
): Vector2 {
  const { x: gridAreaX, y: gridAreaY } = gridArea;
  const [targetX, targetY] = target;
  const [noOfCols, noOfRows] = numOfItems;

  const xUnit = gridAreaX / noOfCols;
  const yUnit = gridAreaY / noOfRows;

  const itemPos = firstItemPosition
    .clone()
    .addScaledVector(new Vector2(targetX), xUnit)
    .addScaledVector(new Vector2(void 0, targetY), yUnit);

  return itemPos;
}

export interface Target {
  pos: Vector3;
  hasTarget: boolean;
}

const TargetMatrixAtom = atom((get) => {
  const { position: origin, grid, target } = get(ShootingRangeAtom);
  const { area: gridArea, firstItemPosition } = get(ComputedGridValuesAtom);

  const [columns, rows] = grid.size;
  const matrix = Array(columns)
    .fill(0)
    .map((_, columnNum) =>
      Array(rows)
        .fill(0)
        .map((_, rowNum) => {
          const pos = findTargetActualPosition(
            gridArea,
            firstItemPosition,
            [columnNum, rowNum],
            grid.size
          );
          return {
            hasTarget: !!rowNum && columnNum / rowNum === 0,
            pos: new Vector3(pos.x, pos.y, origin.z),
          } as Target;
        })
    );
  return { matrix, size: grid.size, origin, targetRadius: target.radius };
});

export const useShootingRangeStore = () => useAtomValue(ShootingRangeAtom);
export const useShootingRangeTargets = () => useAtomValue(TargetMatrixAtom);

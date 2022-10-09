import { random } from "radash";
import {
  Vector2Tuple as Vec2Tuple,
  Vector3Tuple as Vec3Tuple,
  Vector3,
  Vector2,
} from "three";

export type TargetMatrix = Vector3[][];
export type TargetRenderSelection = Vec2Tuple[];

export function getInitialState() {
  const targetRadius = 0.5;
  const targetInitialCount = 5;

  const gridGap = 1;
  const gridSize = [5, 4] as Vec2Tuple;
  const state = {
    grid: {
      gap: Math.max(targetRadius, gridGap),
      size: gridSize,
    },
    target: {
      radius: 0.5,
      minCount: Math.min(targetInitialCount, gridSize[0] * gridSize[1]),
    },
    matrix: [[]] as TargetMatrix,
  };

  state.matrix = getInitialMatrix(
    state.grid.size,
    state.grid.gap,
    state.target.radius
  );
  return state;
}

export function getInitialMatrix(
  gridSize: Vec2Tuple,
  gridGap: number,
  targetRadius: number
): TargetMatrix {
  const [columns, rows] = gridSize;
  const matrix: TargetMatrix = Array(columns)
    .fill(0)
    .map((_, columnNum) =>
      Array(rows)
        .fill(0)
        .map((_, rowNum) => {
          const pos = new Vector3(
            columnNum * targetRadius + gridGap * columnNum,
            rowNum * targetRadius + gridGap * rowNum,
            0
          );
          return pos;
        })
    );
  return matrix;
}

export function isRenderedOn(
  columnAndRow: Vec2Tuple,
  renderSet: TargetRenderSelection
): boolean {
  const [column, row] = columnAndRow;
  return renderSet.some((el) => el[0] === column && el[1] === row);
}

export function generateRandomTarget(
  size: Vec2Tuple,
  hasValueOn: (pos: Vec2Tuple) => boolean,
  ignore: Vec2Tuple[] = []
): [number, number] {
  const [numOfCols, numOfRows] = size;

  const randX = random(0, numOfCols - 1);
  const randY = random(0, numOfRows - 1);
  const newTarget = [randX, randY] as Vec2Tuple;

  if (hasValueOn(newTarget)) {
    return generateRandomTarget(size, hasValueOn, [...ignore, newTarget]);
  }

  return newTarget;
}

import { useMemo } from "react";
import { Vector3Tuple } from "three";

const getNewVertices = (xSize: number, ySize: number) => {
  const positions = Array(xSize)
    .fill(0)
    .reduce((completeArr, _, xPos) => {
      const reducedY = Array(ySize)
        .fill(0)
        .reduce((yArr, _, yPos) => [...yArr, [xPos, 0, yPos]], []);
      return [...completeArr, ...reducedY];
    }, []) as Vector3Tuple[];

  return positions;
};

export const useVertices = (xSize: number, ySize: number) => {
  return useMemo(() => getNewVertices(xSize, ySize), [xSize, ySize]);
};

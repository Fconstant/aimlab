import { atom, useAtom, useAtomValue } from "jotai";
import { Vector2Tuple } from "three";
import { SceneAtom } from "@app/store/Scene.store";
import {
  generateRandomTarget,
  getInitialState,
  isRenderedOn,
  TargetRenderSelection,
} from "./ShootingRange.helpers";
import { useCallback, useInsertionEffect } from "react";

// primitive atoms
const ShootingRangePrimitive = atom(getInitialState());
const TargetRenderPrimitive = atom([] as TargetRenderSelection);

// read-only atoms
const ShootingRangeOriginAtom = atom((get) => get(SceneAtom).shootingGridPos);

// write-only atoms
const GenerateTargetAtom = atom(void 0, (get, set, howManyToAdd: number) => {
  const renderSet = get(TargetRenderPrimitive);
  const { grid } = get(ShootingRangePrimitive);
  const hasValueOn = (pos: Vector2Tuple) => isRenderedOn(pos, renderSet);
  const newTargets = Array(Math.min(howManyToAdd, grid.size[0] * grid.size[1]))
    .fill(0)
    .map(() => generateRandomTarget(grid.size, hasValueOn));
  set(TargetRenderPrimitive, [...renderSet, ...newTargets]);
});
const DestroyTargetAtom = atom(void 0, (get, set, which: Vector2Tuple) => {
  const prev = get(TargetRenderPrimitive);
  set(
    TargetRenderPrimitive,
    prev.filter((p) => p[0] !== which[0] || p[1] !== which[1])
  );
});

export const useShootingRange = () => {
  const origin = useAtomValue(ShootingRangeOriginAtom);
  const { target, grid, matrix } = useAtomValue(ShootingRangePrimitive);
  const renderSet = useAtomValue(TargetRenderPrimitive);

  const [, destroyTarget] = useAtom(DestroyTargetAtom);
  const [, generateTargets] = useAtom(GenerateTargetAtom);

  useInsertionEffect(() => {
    console.log(renderSet);
    if (renderSet.length < target.minCount) {
      generateTargets(target.minCount - renderSet.length);
    }
  }, [renderSet.length, target.minCount]);

  const isRendered = useCallback(
    (col: number, row: number) => isRenderedOn([col, row], renderSet),
    [renderSet]
  );

  return {
    origin,
    target,
    isRendered,
    grid,
    matrix,
    destroyTarget,
    generateTarget: () => generateTargets(1),
  };
};

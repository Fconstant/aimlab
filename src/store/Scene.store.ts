import { atom, useAtomValue } from "jotai";
import { Vector3 } from "three";

const OriginAtom = atom(new Vector3(0, 0, 0));
export const SceneAtom = atom((get) => {
  const origin = get(OriginAtom);
  return {
    origin,
    playerPos: origin.clone(),
    groundPos: origin.clone().add(new Vector3(0, -2, 0)),
    shootingGridPos: origin.clone().add(new Vector3(0, 0, 3)),
  };
});

export const useSceneData = () => useAtomValue(SceneAtom);
export const useOrigin = () => useAtomValue(OriginAtom);

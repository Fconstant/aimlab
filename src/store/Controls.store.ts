import { atom, useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";

export type ControlMode = "first-person" | "free-look";

const ControlsAtom = atom<ControlMode>("first-person");
const ToggleControlAtom = atom(
  (get) => get(ControlsAtom),
  (get, set, _: void) => {
    const curr = get(ControlsAtom);
    set(ControlsAtom, curr === "first-person" ? "free-look" : "first-person");
  }
);

export const useControlMode = () => useAtom(ToggleControlAtom);

const MouseControlAtom = atom({
  registered: false,
});
export const useMouseControlData = () => useAtom(MouseControlAtom);

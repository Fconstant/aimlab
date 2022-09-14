import { atomWithToggle } from "@app/atoms";
import { atom, useAtom } from "jotai";

export type ControlMode = "first-person" | "free-look";

const LockStateAtom = atomWithToggle(false);
const ControlsAtom = atom<ControlMode>("first-person");
const ToggleControlAtom = atom(
  (get) => get(ControlsAtom),
  (get, set, _: void) => {
    const curr = get(ControlsAtom);
    set(ControlsAtom, curr === "first-person" ? "free-look" : "first-person");
  }
);

export const useControls = () => {
  return {
    controlMode: useAtom(ToggleControlAtom),
    lockState: useAtom(LockStateAtom),
  };
};

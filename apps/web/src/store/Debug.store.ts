import { atom, useAtom } from "jotai";
import { useCallback } from "react";

export const DebugAtom = atom(false);

export const useDebugState = () => {
  const [isEnabled, setIsEnabled] = useAtom(DebugAtom);
  return { isEnabled, toggle: useCallback(() => setIsEnabled((p) => !p), []) };
};

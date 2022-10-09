import { atom, useAtomValue } from "jotai";
import { useCallback } from "react";

export const KeybindAtom = atom({
  toggleControls: "P",
  toggleDebug: "X",
  toggleMenu: "M",
});

export type KeyBindMap = typeof KeybindAtom.init;
export type KeyBind = keyof KeyBindMap;

export const useKeybinds = () => {
  const bindMap = useAtomValue(KeybindAtom);

  const getBindOf = useCallback((bind: KeyBind) => bindMap[bind], [bindMap]);

  const isBindOf = useCallback(
    (bind: KeyBind, key: string): boolean => {
      const targetBind = getBindOf(bind);
      const bindSet =
        typeof targetBind === "string" ? [targetBind] : targetBind;
      return bindSet
        .map((each) => each.toUpperCase())
        .includes(key.toUpperCase());
    },
    [bindMap, getBindOf]
  );
  return { getBindOf, isBindOf, bindMap };
};

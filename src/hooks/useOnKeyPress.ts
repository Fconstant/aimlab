import { useEffect } from "react";
import { KeyBind, useKeybinds } from "@app/store/Keybinds.store";

export function useOnKeyPress(
  onPressKey: (key: string) => void,
  bind?: KeyBind
) {
  const { isBindOf } = useKeybinds();
  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      if (bind && !isBindOf(bind, e.key)) {
        return;
      }
      onPressKey(e.key);
    };
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [onPressKey, isBindOf]);
}

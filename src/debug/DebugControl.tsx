import { useOnKeyPress } from "@app/hooks/useOnKeyPress";
import { useDebugState } from "@app/store/Debug.store";

export const DebugControl = () => {
  const { toggle } = useDebugState();
  useOnKeyPress(toggle, "toggleDebug");
  return null;
};

import { useOnKeyPress } from "@app/hooks/useOnKeyPress";
import { useDebugState } from "@app/store/Debug.store";
import { DebugGizmo } from "./DebugGizmo";

export const IncludeDebug = () => {
  const { toggle } = useDebugState();
  useOnKeyPress(toggle, "toggleDebug");
  return <DebugGizmo />;
};

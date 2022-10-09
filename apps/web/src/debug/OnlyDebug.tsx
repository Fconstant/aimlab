import { useDebugState } from "@app/store/Debug.store";
import { FC, PropsWithChildren } from "react";

export const OnlyDebug = ({ children }: PropsWithChildren) => {
  if (!useDebugState().isEnabled) return null;
  return <>{children}</>;
};

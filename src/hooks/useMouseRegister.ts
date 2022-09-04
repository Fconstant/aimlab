import { useMouseControlData } from "../store/Controls.store";
import { useOnKeyPress } from "./useOnKeyPress";

export const useMouseRegister = () => {
  const [_, setMouseData] = useMouseControlData();

  useOnKeyPress((key) => {
    setMouseData((p) => ({ ...p, registered: false }));
  }, "exitMouse");

  const registerMouse = () => {
    setMouseData((p) => ({ ...p, registered: true }));
  };

  return {
    registerMouse,
  };
};

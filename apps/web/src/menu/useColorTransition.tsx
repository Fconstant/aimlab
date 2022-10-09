import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { GroundColor, SceneBgColor } from "./Scene.Colors";

const FREQUENCY_COEFICIENT = 3; // lower = less frequent | bigger = more frequent
const EASE_COEFICIENT = 2; // bigger = smoother the transition

const getOffsetCoeficient = (x: number) =>
  MathUtils.clamp(
    Math.sin(x / EASE_COEFICIENT) * (FREQUENCY_COEFICIENT / 2) + 0.5,
    0,
    1
  );

export const useColorTransition = () => {
  useFrame(({ gl, clock }) => {
    const offset = getOffsetCoeficient(clock.getElapsedTime());
    SceneBgColor.setHSL(0, 0, offset);
    GroundColor.setHSL(0, 0, 1 - offset);
    gl.setClearColor(SceneBgColor);
  });
};

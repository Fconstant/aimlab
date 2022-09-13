import { Sky } from "@react-three/drei";
import { ComponentProps } from "react";

const DEFAULT_SKY_VALUES = {
  turbidity: 1.6,
  rayleigh: 0.2,
  mieDirectionalG: 0.7,
  mieCoefficient: 0.003,
} as ComponentProps<typeof Sky>;

export const SceneSky = () => {
  return <Sky distance={3000} {...DEFAULT_SKY_VALUES} />;
};

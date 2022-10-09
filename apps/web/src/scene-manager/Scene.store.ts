import { atomWithToggle } from "@app/atoms";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface ShootingRangeScene {
  name: "shooting-range";
}
interface MenuScene {
  name: "menu";
}

type AppScenes = ShootingRangeScene | MenuScene;

export const SceneManagerAtom = atomWithStorage<AppScenes>(
  "@aimlab--app-scene",
  {
    name: "shooting-range",
  }
);

export const useScene = () => {
  const [scene, setScene] = useAtom(SceneManagerAtom);
  const toggleBetweenScenes = () =>
    setScene((prev) => ({
      name: prev.name === "shooting-range" ? "menu" : "shooting-range",
    }));

  return {
    scene: scene.name,
    toggleBetweenScenes,
  };
};

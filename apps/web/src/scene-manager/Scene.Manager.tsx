import { useOnKeyPress } from "@app/hooks";
import { MenuScene } from "@app/menu";
import { SceneBgColor as MenuSceneBg } from "@app/menu/Scene.Colors";
import { ShootingRangeScene } from "@app/shooting-range";
import { useThree } from "@react-three/fiber";
import { useCallback, useInsertionEffect } from "react";
import { SceneControls } from "./Scene.Controls";
import { useScene } from "./Scene.store";

export const SceneManager = () => {
  const { scene, toggleBetweenScenes } = useScene();
  const { gl } = useThree();

  useOnKeyPress(useCallback(toggleBetweenScenes, []), "toggleMenu");

  useInsertionEffect(() => {
    switch (scene) {
      case "menu":
        gl.setClearColor(MenuSceneBg);
        return;
      case "shooting-range":
        gl.setClearColor("white");
        return;
      default:
        return;
    }
  }, [scene]);

  return (
    <>
      <SceneControls />
      {scene === "shooting-range" && <ShootingRangeScene />}
      {scene === "menu" && <MenuScene />}
    </>
  );
};

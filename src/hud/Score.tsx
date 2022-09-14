import { useScene } from "@app/scene-manager/Scene.store";
import { useScore } from "@app/store/Score.store";
import { Text } from "@geist-ui/core";
import { HudItem } from "./HudItem";

export const Score = () => {
  const { score } = useScore();
  const { scene } = useScene();
  if (!score || scene !== "shooting-range") return null;
  return (
    <HudItem>
      <Text h4>
        <b>{score * 100}</b> pts
      </Text>
    </HudItem>
  );
};

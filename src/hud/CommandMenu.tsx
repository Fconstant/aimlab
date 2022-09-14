import { KeyBind, useKeybinds } from "@app/store/Keybinds.store";
import { Card, Text, Tooltip } from "@geist-ui/core";
import styled from "styled-components";
import { HudItem } from "./HudItem";

const DESCRIPTION_MAP: Record<KeyBind, string> = {
  toggleControls: "change camera view mode",
  toggleDebug: "toggle debug mode",
  toggleMenu: "switch to menu scene",
};

export const CommandMenu = () => {
  const { bindMap } = useKeybinds();

  return (
    <Tooltip
      placement="bottomStart"
      hideArrow
      text={
        <>
          {Object.entries(DESCRIPTION_MAP).map(([keybind, description]) => (
            <Text p key={keybind}>
              <b>{bindMap[keybind as KeyBind]}</b> - {description}
            </Text>
          ))}
        </>
      }
    >
      <HudItem>
        <Text h4>Key Commands</Text>
      </HudItem>
    </Tooltip>
  );
};

import styled from "styled-components";
import { CommandMenu } from "./CommandMenu";
import { Crosshair } from "./Crosshair";
import { ExitIndicator } from "./ExitIndicator";
import { Score } from "./Score";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const HUDRoot = styled.div`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  pointer-events: none;
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const LeftPos = styled.div`
  margin: 1rem;
  min-width: 5vw;
  max-height: 50vh;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const HUD = () => {
  return (
    <HUDRoot>
      <Crosshair />
      <LeftPos>
        <CommandMenu />
        <Score />
        <ExitIndicator />
      </LeftPos>
    </HUDRoot>
  );
};

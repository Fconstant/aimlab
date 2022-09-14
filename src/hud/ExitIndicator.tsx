import { useControls } from "@app/store/Controls.store";
import { Keyboard, Text } from "@geist-ui/core";
import { HudItem } from "./HudItem";
import { LogOut } from "@geist-ui/icons";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ExitIndicator = () => {
  const {
    lockState: [lockState],
  } = useControls();

  if (!lockState) return null;
  return (
    <HudItem>
      <Flex>
        <LogOut />
        <Keyboard>ESC</Keyboard>
      </Flex>
    </HudItem>
  );
};

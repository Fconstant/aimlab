import { Card } from "@geist-ui/core";
import styled from "styled-components";

export const HudItem = styled(Card)`
  &&& {
    opacity: 0.5;
    transition: opacity 0.5s ease-out;
    transition-delay: 3s;
    pointer-events: painted;
    overflow: hidden;
    height: 64px;
    :hover {
      opacity: 1;
      transition-delay: 0s;
    }
  }
`;
HudItem.defaultProps = {
  type: "dark",
};

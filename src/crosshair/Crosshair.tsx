import { Html } from "@react-three/drei";
import styled from "styled-components";

const HtmlContainer = styled(Html)`
  pointer-events: none;
`;

const Dash = styled.div`
  color: #e62a0d;
  font-size: 32px;
  font-weight: lighter;
  text-align: center;
`;

export const Crosshair = () => {
  return (
    <HtmlContainer transform={false}>
      <Dash>&#10011;</Dash>
    </HtmlContainer>
  );
};

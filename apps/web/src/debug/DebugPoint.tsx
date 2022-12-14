import { Html } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import styled from "styled-components";
import { OnlyDebug } from "./OnlyDebug";

const HtmlContainer = styled(Html)`
  pointer-events: none;
`;

const Label = styled.p<{ bg: string }>`
  color: black;
  background-color: ${({ bg }) => bg};
  font-size: 10px;
  font-weight: 600;
  padding: 0 2px;
  border: solid 1px black;
  border-radius: 4px;
  opacity: 0.75;
  pointer-events: none;
`;

interface DebugPointProps {
  label: string;
  position: Vector3;
  color?: string;
}

export const DebugPoint = ({
  position,
  label,
  color = "white",
}: DebugPointProps) => (
  <OnlyDebug>
    <HtmlContainer position={position}>
      <Label bg={color}>{label}</Label>
    </HtmlContainer>
  </OnlyDebug>
);

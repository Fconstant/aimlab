import { Billboard, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import styled from "styled-components";

const Container = styled(Html)`
  pointer-events: none;
`;

const Dash = styled.div`
  width: 1px;
  height: 1px;
  color: #e62a0d;
  font-size: 24px;
  font-weight: bolder;
  text-align: center;
`;

export const Crosshair = () => {
  return (
    <Container transform={false}>
      <Dash>⊙</Dash>
    </Container>
  );
};

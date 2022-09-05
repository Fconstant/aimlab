import { Billboard, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import styled from "styled-components";

const Container = styled(Html)`
  pointer-events: none;
`;

const Dash = styled.div`
  width: 1px;
  height: 1px;
  border: 5px dashed red;
`;

export const Crosshair = () => {
  return (
    <Container transform={false}>
      <Dash />
    </Container>
  );
};

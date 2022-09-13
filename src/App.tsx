import styled from "styled-components";
import { Canvas } from "./Canvas";

const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <AppRoot>
    <Canvas />
  </AppRoot>
);

export default App;

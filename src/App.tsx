import styled from "styled-components";
import { Canvas } from "./Canvas";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
  display: relative;
`;

const App = () => (
  <AppRoot>
    <GeistProvider>
      <CssBaseline />
      <Canvas />
    </GeistProvider>
  </AppRoot>
);

export default App;

import { useState } from "react";
import { Scene } from "./Scene";
import styled from "styled-components";

const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppRoot>
      <Scene />
    </AppRoot>
  );
}

export default App;

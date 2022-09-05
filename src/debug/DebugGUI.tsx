import { Html } from "@react-three/drei";
import styled from "styled-components";
import { Fragment } from "react";
import Env from "@app/Env";
import { useDebugState } from "@app/store/Debug.store";

const Root = styled.div`
  border-radius: 4px;
  background-color: #0009;
  color: white;
`;

const TableRoot = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: auto auto;
`;

const TKey = styled.div`
  font-weight: 800;
`;
const TVal = styled.div`
  font-weight: 400;
`;

interface DebugGUIProps extends React.PropsWithChildren {
  table: Record<string, string>;
}

export const DebugGUI = ({ table, children }: DebugGUIProps) => {
  if (!useDebugState().isEnabled) return null;
  return (
    <Html transform={false}>
      <Root>
        <TableRoot>
          {Object.entries(table).map((v, k) => (
            <Fragment key={k}>
              <TKey>{k}</TKey>
              <TVal>{v}</TVal>
            </Fragment>
          ))}
        </TableRoot>
        {children}
      </Root>
    </Html>
  );
};

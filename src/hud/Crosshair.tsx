import styled from "styled-components";

const Root = styled.div`
  pointer-events: none;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dash = styled.p`
  color: #e62a0d;
  font-size: 24px;
  font-weight: lighter;
  text-align: center;
`;

export const Crosshair = () => {
  return (
    <Root>
      <Dash>&#10011;</Dash>
    </Root>
  );
};

import React from "react";
import styled from "styled-components";
import { root } from "../theme";

import { ReactComponent as SwapSvg } from "../assets/swap.svg";

function Swap({ handler }) {
  return (
    <Container onClick={handler}>
      <SwapIcon />
    </Container>
  );
}

export default Swap;

const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  padding: 6px;
  justify-content: flex-start;
  align-items: center;
`;

const SwapIcon = styled(SwapSvg)`
  & path {
    fill: ${(prop) => prop.theme.text};
    transition: all ${root.animation_time};
  }
`;

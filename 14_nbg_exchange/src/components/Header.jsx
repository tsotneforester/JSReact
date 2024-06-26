import React from "react";
import styled from "styled-components";

function Header() {
  return <Container></Container>;
}

export default Header;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background-color: #081233;
  background-image: url("assets/nbg.svg"), url("assets/lines.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: clamp(216px, 50%, 390px), cover;
  background-position: 10px 10px, 0% 0%;

  height: 300px;
  width: 100%;
  z-index: -1;
`;

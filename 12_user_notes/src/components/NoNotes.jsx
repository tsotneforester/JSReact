import React from "react";
import styled from "styled-components";
import { root } from "../styled";

export default function NoNotes() {
  return (
    <S.Container>
      <h1>You don't have any notes</h1>
      <img src="/assets/no-notes.svg" alt="" />
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  padding: 14px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  /* img {
    width: 60%;
  } */

  h1 {
    font-size: 18px;
    color: #000000bd;
    font-weight: 400;
    text-align: center;
    @media only screen and (min-width: ${root.media.tablet}px) {
      font-size: 26px;
    }
  }
`;

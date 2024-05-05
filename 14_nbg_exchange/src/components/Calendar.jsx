import styled from "styled-components";
import { root, defaultInput } from "../theme";
import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";
import { AppContext } from "../Context";

import SunSvg from "../assets/calendar-outline.svg?react";

function Calendar() {
  const { date, setDate } = useContext(AppContext);
  return (
    <>
      <Container>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <span>
          <button type="button">
            <SunIcon />
          </button>
        </span>
      </Container>
    </>
  );
}

export default Calendar;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  & input {
    ${defaultInput}
    font-size: 16px;
    width: 100%;
    flex-grow: 1;
  }

  & span {
    position: absolute;
    top: 19px;
    right: 11px;
    width: 25px;
    height: 25px;
    pointer-events: none;
    background-color: transparent;
    transition: background ${root.animation_time};
    & button {
      border: none;
      background: transparent;
    }
  }
`;

const SunIcon = styled(SunSvg)`
  & path {
    fill: ${(prop) => prop.theme.text};
    transition: all ${root.animation_time};
  }
`;

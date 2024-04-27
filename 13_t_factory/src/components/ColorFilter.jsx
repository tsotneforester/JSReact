import React from "react";
import styled from "styled-components";
import data from "../data";

import { setColor } from "../store";
import { useDispatch, useSelector } from "react-redux";

function ColorFilter() {
  const colors = [...new Set(data.map((e) => e.colors).flat())];

  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const index = useSelector((state) => state.colorIndex);

  return (
    <S.Container>
      <h1>Colors</h1>
      <S.Circles>
        {colors.map((e, i) => {
          return (
            <S.Circle
              key={i}
              onClick={() => {
                dispatch(setColor({ color: e, index: i }));
              }}
              className={index == i ? "active" : undefined}
              style={{ backgroundColor: e }}></S.Circle>
          );
        })}
      </S.Circles>
    </S.Container>
  );
}

export default ColorFilter;

const S = {};
S.Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

S.Circles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
  width: 160px;
`;

S.Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  transition: all 0.6s;

  &.active {
    border: black 2px solid;
    opacity: 0.7;
    display: flex;

    justify-content: center;
    align-items: center;
    animation: spin 0.6s infinite;
    animation-direction: normal;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;

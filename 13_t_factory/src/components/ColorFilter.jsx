import React, { useRef, useContext } from "react";
import styled from "styled-components";
import rawData from "../data";
import { FilterContext } from "../Context";
import { ReactComponent as CheckSVG } from "../assets/check.svg";

function ColorFilter() {
  let arr = [...new Set(rawData.map((Val) => Val.colors).flat())];
  const refContainer = useRef(null);
  const { inputColor, setInputColor } = useContext(FilterContext);
  let ind = arr.indexOf(inputColor);

  return (
    <Wrapper>
      <h1>Colors</h1>
      <S.ColorFilter ref={refContainer}>
        <h2
          onClick={(e) => {
            setInputColor(e.target.dataset.color);
          }}
          className={ind < 0 && "active"}
          data-color="all">
          All
        </h2>
        {arr.map((e, i) => {
          return (
            <h1
              key={i}
              onClick={(e) => {
                setInputColor(e.target.dataset.color);
              }}
              className={ind == i ? "active" : ""}
              data-color={e}
              style={{ backgroundColor: e }}>
              {ind == i ? <CheckIcon /> : ""}
            </h1>
          );
        })}
      </S.ColorFilter>
    </Wrapper>
  );
}

export default ColorFilter;

const S = {};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

const CheckIcon = styled(CheckSVG)`
  color: white;
`;

S.ColorFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
  width: 160px;
  h1 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 0.7;
  }

  h1.active {
    border: 2px green solid;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2.active {
    border-bottom: 2px black solid;
  }

  h1,
  h2 {
    cursor: pointer;
  }
`;

import styled from "styled-components";
import React, { useContext } from "react";
import { DataContext } from "../Context";
import { FilterContext } from "../Context";
import { SortContext } from "../Context";

function ResetFilter() {
  const { sliderRange } = useContext(DataContext);

  const { setInputString, setInputPrice, setInputColor, setInputCategory, setInputFreeShipping } = useContext(FilterContext);
  const { setSortPattern } = useContext(SortContext);

  return (
    <S.Button
      onClick={() => {
        setInputFreeShipping(false);
        setInputString("");
        setInputPrice(Math.max(...sliderRange));
        setInputColor("all");
        setInputCategory("all");
        setSortPattern(false);
      }}>
      Clear Filters
    </S.Button>
  );
}

export default ResetFilter;

const S = {};
S.Button = styled.button`
  background-color: red;
  color: white;
  padding: 8px 4px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.4s;
  width: 100%;

  &:hover {
    background-color: #a60606;
  }
`;

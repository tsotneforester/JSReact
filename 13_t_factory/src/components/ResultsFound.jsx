import styled from "styled-components";
import React, { useContext } from "react";
import { DataContext } from "../Context";
import { FilterContext } from "../Context";
import { root, device } from "../theme";
import { SortContext } from "../Context";

function ResultsFound() {
  const { data, setData } = useContext(DataContext);

  const { setSortPattern } = useContext(SortContext);

  // points.sort(function (a, b) {
  //   return a.localeCompare(b);
  // });

  function handler(e) {
    setSortPattern(e.target.value);
  }

  return (
    <Wrapper>
      <div className="counter">{data.length} products found</div>
      <div className="line"></div>
      <div className="sorter">
        <span>Sort By</span>
        <select name="" id="" onChange={handler}>
          <option value="1">Name (A-Z)</option>
          <option value="2">Name (Z-A)</option>
          <option value="3">Price (Lowest)</option>
          <option value="4">Price (Highest)</option>
        </select>
      </div>
    </Wrapper>
  );
}

export default ResultsFound;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  @media ${device.tablet} {
    padding: 0;
    flex-direction: row;
    align-items: center;
  }

  & .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  & .line {
    width: 100%;
    background-color: #8f8f8f36;
    height: 2px;
    @media ${device.tablet} {
      width: auto;
      flex-grow: 1;
      margin: 0 20px;
      background-color: #8f8f8f36;
    }
  }
  & .sorter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    & select {
      background-color: transparent;
      border: none;
      font-size: 16px;
    }
  }
`;

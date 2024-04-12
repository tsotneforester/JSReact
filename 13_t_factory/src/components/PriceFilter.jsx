import styled from "styled-components";
import React, { useContext } from "react";
import { DataContext } from "../Context";
import { FilterContext } from "../Context";
import { formatPrice } from "../Functions";

function PriceFilter() {
  const { sliderRange } = useContext(DataContext);
  const { inputPrice, setInputPrice } = useContext(FilterContext);

  return (
    <Wrapper>
      <h1>Price</h1>
      <div>
        <span>{formatPrice(inputPrice)}</span>
        <input type="range" value={inputPrice} onChange={(e) => setInputPrice(e.target.valueAsNumber)} min={Math.min(...sliderRange)} max={Math.max(...sliderRange)} step="1" />
      </div>
    </Wrapper>
  );
}

export default PriceFilter;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;
    width: 100%;
    //align-items: center;
  }
  input {
    width: 100%;
  }
`;

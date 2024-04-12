import React, { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../Context";

function ShippingFilter() {
  const { inputFreeShipping, setInputFreeShipping } = useContext(FilterContext);
  return (
    <Wrapper>
      <label htmlFor="ship">Free Shipping</label>
      <input id="ship" type="checkbox" checked={inputFreeShipping} onChange={(e) => setInputFreeShipping(!inputFreeShipping)} />
    </Wrapper>
  );
}

export default ShippingFilter;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  font-size: 20px;

  & label {
    cursor: pointer;
  }
`;

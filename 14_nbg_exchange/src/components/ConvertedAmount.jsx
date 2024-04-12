import React from "react";
import styled from "styled-components";
import { root } from "../theme";
import { NumericFormat } from "react-number-format";

function ConvertedAmount({ value }) {
  return <Input thousandSeparator={" "} decimalScale={2} value={value} />;
}

export default ConvertedAmount;

const Input = styled(NumericFormat)`
  width: 100%;
  font-weight: 600;
  text-align: center;
  padding: 2px 10px;
  border: none;
  font-size: 18px;
  color: ${(prop) => prop.theme.disabled};
  min-width: 0;
  background-color: transparent;
  transition: background-color ${root.animation_time}, color ${root.animation_time};
`;

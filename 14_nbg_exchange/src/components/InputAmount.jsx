import React from "react";
import styled from "styled-components";
import { root } from "../theme";
import { NumericFormat } from "react-number-format";

function InputAmount({ amount, setter }) {
  return (
    <Input
      value={amount}
      thousandSeparator={" "}
      decimalScale={2}
      allowNegative={false}
      // prefix={"$"}
      onValueChange={(values) => {
        setter({ string: values.formattedValue, number: values.floatValue });
      }}
    />
  );
}

export default InputAmount;

const Input = styled(NumericFormat)`
  font-weight: 600;
  text-align: center;
  padding: 2px 10px;
  border: none;
  font-size: 18px;
  color: inherit;
  min-width: 0;
  background-color: transparent;
  transition: background-color ${root.animation_time};
`;

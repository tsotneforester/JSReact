import React, { useContext } from "react";
import { DataContext } from "../Context";
import { FilterContext } from "../Context";
import styled from "styled-components";

function StringFilter() {
  const { inputString, setInputString } = useContext(FilterContext);

  return <S.Input type="text" value={inputString} onChange={(e) => setInputString(e.target.value)} placeholder="Search..." />;
}

export default StringFilter;

const S = {};
S.Input = styled.input`
  padding: 8px 4px;
  width: 100%;
  border-radius: 6px;
  border: none;
  background-color: #80808031;
  letter-spacing: 2px;
  border: 2px solid transparent;
  &:focus {
    border: 2px solid blue;
  }
`;

import styled from "styled-components";
import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from "react-redux";
import { root } from "../styled";
import { setSearchText } from "../filterSlice";

export default function Seardch() {
  const dispatcher = useDispatch();

  const searchText = useSelector((state) => state.searchText);

  return (
    <S.Container>
      <SearchIcon />
      <input type="text" placeholder="Search notes…" value={searchText} onChange={(e) => dispatcher(setSearchText(e.target.value.toLowerCase()))} />
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  max-width: ${root.card_max_width};
  border-radius: 8px;
  padding: 18px 22px;
  background-color: #80a0d3;
  order: 1;
  grid-area: search;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    max-width: none;
  }

  input {
    flex-grow: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    outline: none;
    border: 0;
  }
`;

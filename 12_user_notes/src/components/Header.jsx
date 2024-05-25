import styled from "styled-components";
import { Button } from "@mui/material";
import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";

import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

export default function Header({ token }) {
  const navigate = useNavigate();

  const dispatcher = useDispatch();

  let userName = JSON.parse(sessionStorage.getItem("token"))?.user.user_metadata.full_name;

  function handleLogout() {
    console.log("logout");
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <S.Header>
      <h1>Welcome, {userName}</h1>
      <box-icon name="rocket" color="white"></box-icon>
      <Button variant="contained" color="warning" onClick={handleLogout}>
        Logout
      </Button>
    </S.Header>
  );
}

const S = {};

S.Header = styled.header`
  width: 100%;
  max-width: 1100px;
  grid-area: header;
  /* position: absolute !important;
  top: 12px;
  right: 12px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  order: 1;
  h1 {
    font-size: 18px;
    color: black;
    font-weight: 700;
    text-align: center;
  }
`;

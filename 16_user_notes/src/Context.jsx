import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styled";

import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./store.jsx";

const store = configureStore({
  reducer: noteSlice.reducer,
  // reducer: {
  //   slice1: counterSlice.reducer,
  // },
});

function Context({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        {children}
      </BrowserRouter>
    </Provider>
  );
}

export { Context };

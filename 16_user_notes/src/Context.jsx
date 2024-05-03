import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styled";

import styled, { ThemeProvider } from "styled-components";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./noteSlice.jsx";
import { filterSlice } from "./filterSlice.jsx";

const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
    filter: filterSlice.reducer,
  },
});

function Context({ children }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyles />
        {children}
      </HashRouter>
    </Provider>
  );
}

export { Context };

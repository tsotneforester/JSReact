import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./store.jsx";
import { GlobalStyles } from "./theme.jsx";
import Router from "./Router.jsx";

const store = configureStore({
  reducer: filterSlice.reducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyles />
    <Router />
  </Provider>
);

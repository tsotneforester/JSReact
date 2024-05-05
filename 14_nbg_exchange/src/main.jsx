import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Context } from "./Context";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <Router />
  </Context>
);

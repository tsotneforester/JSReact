import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import App from "./App";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

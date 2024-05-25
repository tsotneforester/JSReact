import React, { useState, useEffect } from "react";
import { GlobalStyles, root } from "./styled";
const AppContext = React.createContext();
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkTheme");
    setIsDarkMode(storedTheme === "true");
  }, []);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Provider store={store}>
        <HashRouter>
          <ThemeProvider theme={isDarkMode ? root.theme.dark : root.theme.light}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </HashRouter>
      </Provider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };

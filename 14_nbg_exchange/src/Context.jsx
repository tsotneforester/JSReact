import React, { useState, useEffect } from "react";
import { GlobalStyles, light, dark } from "./theme";
const AppContext = React.createContext();
import axios from "axios";
import moment from "moment";
import styled, { ThemeProvider } from "styled-components";

let url = "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/";

function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dateAvailable, setDateAvailable] = useState();
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  async function dataAvailableTill() {
    try {
      const res = await axios(url);
      setDateAvailable(moment(res.data[0].date).format("YYYY-MM-DD"));
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  useEffect(() => {
    dataAvailableTill();
  }, []);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode, dateAvailable, date, setDate }}>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };

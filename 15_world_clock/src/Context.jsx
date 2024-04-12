import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styled";
import axios from "axios";
const AppContext = React.createContext();
const REGIONS = ["Asia/Tbilisi", "Asia/Tokyo", "Asia/Bishkek", "Asia/Ashgabat", "Asia/Damascus", "America/Asuncion"];
const URL = "https://api.timezonedb.com/v2.1/list-time-zone?key=OYUED61XIOW8&format=json";

function Context({ children }) {
  const [zones, setZones] = useState(null);

  async function CallAPI(url) {
    const response = await axios(url);

    let filteredZones = response.data.zones.filter((e) => {
      for (let i = 0, n = REGIONS.length; i < n; i++) {
        if (e.zoneName == REGIONS[i]) {
          return e;
        }
      }
    });

    setZones(filteredZones);
  }

  useEffect(() => {
    CallAPI(URL);
  }, []);

  return (
    <AppContext.Provider value={{ zones }}>
      <GlobalStyles />
      {children}
    </AppContext.Provider>
  );
}

export { Context, AppContext };

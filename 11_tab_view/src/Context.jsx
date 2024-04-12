import React, { useState } from "react";
const LanguageContext = React.createContext();
import { data } from "./component/LanguageToggler/data";

function Context({ children }) {
  const [language, setLanguage] = useState(data[0]["code"]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export { Context, LanguageContext };

import React, { useState, useEffect } from "react";
const DataContext = React.createContext();
const FilterContext = React.createContext();
const SortContext = React.createContext();
import rawData from "./data";

function Context({ children }) {
  const sliderRange = [...new Set(rawData.map((Val) => Val.price))];
  let [data, setData] = useState(rawData);

  let [inputString, setInputString] = useState("");
  let [inputPrice, setInputPrice] = useState(Math.max(...sliderRange));
  let [inputColor, setInputColor] = useState("all");
  let [inputCategory, setInputCategory] = useState("all");
  let [inputFreeShipping, setInputFreeShipping] = useState(false);

  let [sortPattern, setSortPattern] = useState(false);

  let [activeProduct, setActiveProduct] = useState();
  let [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    let filteredData = [...rawData];
    filteredData = filteredData.filter((e) => {
      return e.price <= inputPrice;
    });

    filteredData = filteredData.filter((e) => {
      if (inputColor == "all") {
        return e;
      } else {
        return e.colors.indexOf(inputColor) > -1;
      }
    });

    filteredData = filteredData.filter((e) => {
      if (inputCategory == "all") {
        return e;
      } else {
        return e.category === inputCategory;
      }
    });

    filteredData = filteredData.filter((e) => e.price < inputPrice + 1);

    filteredData = filteredData.filter((e) => e.name.toLowerCase().indexOf(inputString.toLowerCase()) > -1);

    filteredData = filteredData.filter((e) => {
      if (inputFreeShipping == false) {
        return e;
      } else {
        return e.shipping === false;
      }
    });

    filteredData = filteredData.sort(function (a, b) {
      let n1 = a.name;
      let n2 = b.name;
      let p1 = a.price;
      let p2 = b.price;
      if (sortPattern == 1) {
        return n1.localeCompare(n2);
      } else if (sortPattern == 2) {
        return n2.localeCompare(n1);
      } else if (sortPattern == 3) {
        return p1 - p2;
      } else if (sortPattern == 4) {
        return p2 - p1;
      }
    });

    setData(filteredData);
  }, [inputPrice, inputColor, inputFreeShipping, inputCategory, inputString, sortPattern]);

  return (
    <DataContext.Provider value={{ data, setData, sliderRange, activeProduct, setActiveProduct, modalOpened, setModalOpened }}>
      <FilterContext.Provider value={{ inputString, setInputString, inputPrice, setInputPrice, inputColor, setInputColor, inputCategory, setInputCategory, inputFreeShipping, setInputFreeShipping }}>
        <SortContext.Provider value={{ sortPattern, setSortPattern }}>{children}</SortContext.Provider>
      </FilterContext.Provider>
    </DataContext.Provider>
  );
}

export { Context, DataContext, FilterContext, SortContext };

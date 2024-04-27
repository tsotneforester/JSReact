import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { root } from "./theme";
import { setData } from "./store";
import { useDispatch, useSelector } from "react-redux";
import data from "./data";

import { ColorFilter, CategoryFilter, ShippingFilter, ResultsCountNSort, Products, ResetFilter, Modal } from "./components";

function App() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const category = useSelector((state) => state.category);
  const freeShipping = useSelector((state) => state.freeShipping);
  const sortPattern = useSelector((state) => state.sortPattern);

  useEffect(() => {
    let filteredData = [...data];

    filteredData = color ? filteredData.filter((e) => e.colors[0] == color) : filteredData;

    filteredData = category ? filteredData.filter((e) => e.category == category) : filteredData;

    filteredData = freeShipping ? filteredData.filter((e) => e.shipping) : filteredData;

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

    dispatch(setData(filteredData));

    // const sliderRange = [...new Set(rawData.map((Val) => Val.price))];
    // let [inputPrice, setInputPrice] = useState(Math.max(...sliderRange));

    // filteredData = filteredData.filter((e) => {
    //   return e.price <= inputPrice;
    // });

    // filteredData = filteredData.filter((e) => e.name.toLowerCase().indexOf(inputString.toLowerCase()) > -1);
  }, [color, category, freeShipping, sortPattern]);

  return (
    <>
      <S.Filters>
        {/* <StringFilter /> */}
        {/* <PriceFilter /> */}
        <ColorFilter />
        <CategoryFilter />
        <ShippingFilter />
        <ResetFilter />
      </S.Filters>
      <S.Result>
        <ResultsCountNSort />
        <Products />
      </S.Result>
      <Modal />
    </>
  );
}

export default App;

const S = {};

S.Filters = styled.aside`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  @media only screen and (min-width: ${root.media.mobile}) {
    padding: 20px;
  }
  @media only screen and (min-width: ${root.media.tablet}) {
    width: 390px;
    top: 0;
    padding: 20px;
  }
`;

S.Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  position: relative;
  padding: 10px;
  @media only screen and (min-width: ${root.media.mobile}) {
    padding: 20px;
  }
`;

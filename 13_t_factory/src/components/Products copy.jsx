import Product from "./ProductCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { root } from "../theme";
import { useState } from "react";
import { setData } from "../store";
import data from "../data";

import { useSelector, useDispatch } from "react-redux";

function Products() {
  //onst data = useSelector((state) => state.data);
  const [searchParams, setSearchParams] = useSearchParams();
  let tempData = [...data];
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displaydData, setDisplaydData] = useState([]);
  const chunk = useSelector((state) => state.chunk);

  useEffect(() => {
    tempData = tempData.sort(function (a, b) {
      const name = searchParams.get("sort");
      const order = searchParams.get("order");

      let n1 = a.name;
      let n2 = b.name;
      let p1 = a.price;
      let p2 = b.price;

      if (name == "name" && order == "asc") {
        return n1.localeCompare(n2);
      } else if (name == "name" && order == "des") {
        return n2.localeCompare(n1);
      } else if (name == "price" && order == "asc") {
        return p1 - p2;
      } else if (name == "price" && order == "des") {
        return p2 - p1;
      }
    });

    tempData = searchParams.get("category") ? tempData.filter((e) => e.category == searchParams.get("category")) : tempData;

    tempData = searchParams.get("free-shipping") ? tempData.filter((e) => e.freeShipping == Boolean(searchParams.get("free-shipping"))) : tempData;

    tempData = searchParams.get("color") ? tempData.filter((e) => e.colors[0] == searchParams.get("color")) : tempData;

    // tempData = page ? tempData.slice((page - 1) * chunk, page * chunk) : tempData;

    // tempData = data.slice((page - 1) * chunk, page * chunk);

    dispatch(setData(tempData));
    setFilteredProducts(tempData);
  }, [searchParams]);

  useEffect(() => {
    let pages = Math.ceil(filteredProducts.length / chunk);
    let page = searchParams.get("page");

    if (pages < page) {
      page = 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", 1);
      setSearchParams(params);
      setDisplaydData(filteredProducts.slice((page - 1) * chunk, page * chunk));
    } else {
      setDisplaydData(filteredProducts.slice((page - 1) * chunk, page * chunk));
    }
  }, [filteredProducts]);

  return data.length > 0 ? (
    <img className="disconnected" src="./assets/disconnected.png" alt="disconnected" />
  ) : (
    // <S.Container>
    //   <Product data={displaydData}></Product>
    // </S.Container>
    <S.H1>Sorry, no products matched your search</S.H1>
  );
}

export default Products;

const S = {};
S.Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 30px;
  @media only screen and (min-width: ${root.media.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
    align-items: flex-start;
    grid-gap: 20px;
  }
  @media only screen and (min-width: ${root.media.laptop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: flex-start;
    align-items: flex-start;
    grid-gap: 14px;
  }

  @media only screen and (min-width: ${root.media.desktop}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: flex-start;
    align-items: flex-start;
    grid-gap: 14px;
  }

  .disconnected {
    align-self: center;
  }
`;

S.H1 = styled.h1`
  text-align: center;
  width: 100%;
`;

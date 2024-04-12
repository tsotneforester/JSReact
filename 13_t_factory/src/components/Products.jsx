import NoProduct from "./NoProduct";
import Product from "./ProductCard";
import styled from "styled-components";
import React, { useContext } from "react";
import { DataContext } from "../Context";
import { root, device } from "../theme";

function Products() {
  const { data } = useContext(DataContext);

  return data.length > 0 ? (
    <Wrapper>
      <Product data={data}></Product>
    </Wrapper>
  ) : (
    <NoProduct />
  );
}

export default Products;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 30px;
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
    align-items: flex-start;
    grid-gap: 20px;
  }
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: flex-start;
    align-items: flex-start;
    grid-gap: 14px;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: flex-start;
    align-items: flex-start;
    grid-gap: 14px;
  }
`;

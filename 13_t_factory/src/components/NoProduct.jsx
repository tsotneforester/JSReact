import React from "react";
import styled from "styled-components";
import { ReactComponent as StoreSVG } from "../assets/storefront.svg";

const NoProduct = () => {
  return <H1>Sorry, no products matched your search.</H1>;
};

export default NoProduct;

const H1 = styled.h1`
  text-align: center;
  width: 100%;
`;

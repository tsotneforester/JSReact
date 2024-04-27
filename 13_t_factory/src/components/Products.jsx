import Product from "./ProductCard";
import styled from "styled-components";

import { root } from "../theme";
import { useSelector } from "react-redux";

function Products() {
  const data = useSelector((state) => state.data); //state.slice1.value

  return data.length > 0 ? (
    <S.Container>
      <Product data={data}></Product>
    </S.Container>
  ) : (
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
`;

S.H1 = styled.h1`
  text-align: center;
  width: 100%;
`;

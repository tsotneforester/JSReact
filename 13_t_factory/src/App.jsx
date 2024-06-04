import styled from "styled-components";
import { root } from "./theme";
import { ColorFilter, CategoryFilter, ShippingFilter, ResultsCountNSort, Products, ResetFilter, Modal } from "./components";
import Paginator from "./components/Paginator";

function App() {
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
        <Paginator />
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

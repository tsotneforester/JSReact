import styled from "styled-components";
import { root, device } from "./theme";

import { ColorFilter, CategoryFilter, ShippingFilter, ResultsFound, Products, ResetFilter, PriceFilter, StringFilter, Modal } from "./components";

function App() {
  return (
    <Wrapper>
      <S.Filters>
        <StringFilter />
        <PriceFilter />
        <ColorFilter />
        <CategoryFilter />
        <ShippingFilter />
        <ResetFilter />
      </S.Filters>
      <S.Main>
        <ResultsFound />
        <Products />
      </S.Main>
      <Modal />
    </Wrapper>
  );
}

export default App;
const S = [];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

S.Filters = styled.aside`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  @media ${device.mobile} {
    padding: 20px;
  }
  @media ${device.tablet} {
    width: 390px;
    position: sticky;
    top: 0;
    padding: 20px;
  }
`;

S.Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  position: relative;
  padding: 10px;
  @media ${device.mobile} {
    padding: 20px;
  }
`;

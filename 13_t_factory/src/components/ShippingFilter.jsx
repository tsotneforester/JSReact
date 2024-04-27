import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setShipping } from "../store";

function ShippingFilter() {
  const dispatch = useDispatch();
  const freeShipping = useSelector((state) => state.freeShipping);

  return (
    <S.Container>
      <label htmlFor="ship">Free Shipping</label>
      <input id="ship" type="checkbox" checked={freeShipping} onChange={() => dispatch(setShipping())} />
    </S.Container>
  );
}

export default ShippingFilter;

const S = {};
S.Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  font-size: 20px;

  & label {
    cursor: pointer;
  }
`;

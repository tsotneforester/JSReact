import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

function ShippingFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handler(e) {
    const checkboxStatus = e.target.checked;

    const params = new URLSearchParams(searchParams);
    if (!checkboxStatus) {
      params.delete("free-shipping");
      setSearchParams(params);
      navigate(`/?${params.toString()}`);
      return;
    }

    params.set("free-shipping", e.target.checked);
    setSearchParams(params);
    navigate(`/?${params.toString()}`);
  }

  const currentShippingStatus = searchParams.get("free-shipping") || false;

  return (
    <S.Container>
      <label htmlFor="ship">Free Shipping</label>
      <input id="ship" type="checkbox" checked={Boolean(currentShippingStatus)} onChange={handler} />
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

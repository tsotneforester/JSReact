import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reset } from "../store";

function ResetFilter() {
  const dispatch = useDispatch();

  return (
    <S.Button
      onClick={() => {
        dispatch(reset());
      }}>
      Clear Filters
    </S.Button>
  );
}

export default ResetFilter;

const S = {};
S.Button = styled.button`
  background-color: red;
  color: white;
  padding: 8px 4px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.4s;
  width: 100%;

  &:hover {
    background-color: #a60606;
  }
`;

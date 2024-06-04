import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

function ResetFilter() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <S.Button
      onClick={() => {
        setSearchParams({});
        const params = new URLSearchParams({});
        params.set("page", 1);
        setSearchParams(params);
        navigate(`/?${params.toString()}`);
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

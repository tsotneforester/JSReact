import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { root } from "../theme";
import { sort } from "../store";

function ResultsCountNSort() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  function handler(e) {
    dispatch(sort(e.target.value));
  }

  return (
    <Wrapper>
      <div className="counter">{data.length} products found</div>
      <div className="line"></div>
      <div className="sorter">
        <form>
          <select onChange={handler} required>
            <option value="" disabled selected hidden>
              Sort By
            </option>
            <option value="1">Name (A-Z)</option>
            <option value="2">Name (Z-A)</option>
            <option value="3">Price (Lowest)</option>
            <option value="4">Price (Highest)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}

export default ResultsCountNSort;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  @media only screen and (min-width: ${root.media.tablet}) {
    padding: 0;
    flex-direction: row;
    align-items: center;
  }

  & .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  & .line {
    width: 100%;
    background-color: #8f8f8f36;
    height: 2px;

    @media only screen and (min-width: ${root.media.tablet}) {
      width: auto;
      flex-grow: 1;
      margin: 0 20px;
      background-color: #8f8f8f36;
    }
  }
  & .sorter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    select {
      background-color: transparent;
      border: none;
      font-size: 16px;
    }

    select:invalid {
      color: gray;
    }
  }
`;

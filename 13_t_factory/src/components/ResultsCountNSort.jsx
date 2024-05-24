import { useSelector } from "react-redux";
import styled from "styled-components";
import { root } from "../theme";

import { useNavigate, useSearchParams } from "react-router-dom";

const sordData = [
  {
    name: "default",
    textNode: "Sort: Default",
  },
  {
    name: "name/asc",
    textNode: "Name (A-Z)",
  },

  {
    name: "name/des",
    textNode: "Name (Z-A)",
  },
  {
    name: "price/asc",
    textNode: "Price (Lowest)",
  },
  {
    name: "price/des",
    textNode: "Price (Highest)",
  },
];

function ResultsCountNSort() {
  const data = useSelector((state) => state.data);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  function handler(e) {
    const params = new URLSearchParams(searchParams);

    if (e.target.value == "default") {
      params.delete("sort");
      params.delete("order");
      setSearchParams(params);
      navigate(`/?${params.toString()}`);
      return;
    }
    const [sortName, sortOrder] = e.target.value.split("/");
    params.set("sort", sortName);
    params.set("order", sortOrder);
    setSearchParams(params);
    navigate(`/?${params.toString()}`);
  }

  const currentSort = Boolean(searchParams.get("sort")) ? `${searchParams.get("sort")}/${searchParams.get("order")}` : "default";

  return (
    <Wrapper>
      <div className="counter">{data.length} products found</div>
      <div className="line"></div>
      <div className="sorter">
        <form>
          <select value={currentSort} onChange={handler} required>
            {sordData.map((e, i) => {
              return (
                <option key={i} value={e.name}>
                  {e.textNode}
                </option>
              );
            })}
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

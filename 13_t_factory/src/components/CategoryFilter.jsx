import React, { useContext } from "react";
import styled from "styled-components";
import rawData from "../data";
import { FilterContext } from "../Context";

function CategoryFilter() {
  let arrRaw = [...new Set(rawData.map((Val) => Val.category))];
  let arr = arrRaw.filter((e) => e); //filter out empty category
  arr.unshift("all");
  const { inputCategory, setInputCategory } = useContext(FilterContext);
  let ind = arr.indexOf(inputCategory);

  return (
    <Wrapper>
      <h1>Categoty</h1>
      <div className="categories">
        {arr.map((e, i) => {
          return (
            <h2
              key={i}
              onClick={(e) => {
                setInputCategory(e.target.dataset.category);
              }}
              className={ind == i ? "active" : undefined}
              data-category={e}>
              {e}
            </h2>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default CategoryFilter;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;

  .categories {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h2 {
    opacity: 0.7;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.3s;
    border-bottom: 2px black transparent;
    font-weight: 400;
    font-style: normal;
    color: inherit;
    color: #02022f7f;
    text-transform: capitalize;
    font-weight: 700;
  }

  h2.active {
    border-bottom: 2px black solid;
    opacity: 1;
    font-style: italic;
    font-weight: 700;
    color: #040431;
  }
`;

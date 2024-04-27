import React from "react";
import styled from "styled-components";
import data from "../data";
import { setCategory } from "../store";
import { useDispatch, useSelector } from "react-redux";

function CategoryFilter() {
  const categories = [...new Set(data.map((e) => e.category).filter((e) => e))];

  const dispatch = useDispatch();
  const index = useSelector((state) => state.categoryIndex);

  return (
    <S.Container>
      <h1>Categoty</h1>
      <div className="categories">
        {categories.map((e, i) => {
          return (
            <h2
              key={i}
              onClick={() => {
                dispatch(setCategory({ category: e, index: i }));
              }}
              className={index == i ? "active" : undefined}>
              {e}
            </h2>
          );
        })}
      </div>
    </S.Container>
  );
}

export default CategoryFilter;
const S = {};
S.Container = styled.div`
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

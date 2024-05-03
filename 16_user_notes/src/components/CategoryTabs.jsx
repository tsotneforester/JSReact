import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CATEGORIES } from "../data";
import { setCategory } from "../filterSlice";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { root } from "../styled";

export default function CategoryTabs() {
  const dispatcher = useDispatch();

  const category = useSelector((state) => state.filter.category);

  function handleChange(params, newValue) {
    dispatcher(setCategory(newValue));
  }

  return (
    <S.Tabs value={category || ""} onChange={handleChange} variant="scrollable" textColor="secondary" indicatorColor="secondary" aria-label="scrollable auto tabs example" scrollButtons="auto" allowScrollButtonsMobile>
      <Tab sx={{ minWidth: "0" }} value="" label="All" />
      {Object.entries(CATEGORIES).map((e, i) => {
        return <Tab key={i} value={e[0]} label={e[1][0]} />;
      })}
    </S.Tabs>
  );
}
const S = {};
S.Tabs = styled(Tabs)`
  width: 100%;
  max-width: ${root.card_max_width};
  order: 3;
  @media only screen and (min-width: ${root.media.tablet}px) {
    max-width: 604px;
  }

  & .MuiButtonBase-root {
    min-width: 30px;
  }
`;

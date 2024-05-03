//store.js

import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    category: null,
    searchText: "",
  },
  reducers: {
    //actions

    setCategory(state, action) {
      state.category = action.payload;
      //action.payload
    },

    setSearchText(state, action) {
      state.searchText = action.payload;
      //action.payload
    },
  },
});

export const { setCategory, setSearchText } = filterSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||

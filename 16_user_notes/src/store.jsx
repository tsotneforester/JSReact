//store.js

import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    token: null,
  },
  reducers: {
    //actions
    setToken(state, action) {
      state.token = action.payload;
      //action.payload
    },
  },
});

export const { setToken } = noteSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||

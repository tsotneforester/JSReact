import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [...data],
    chunk: 12,
    showModal: false,
    activeProduct: null,
  },
  reducers: {
    //actions
    setData(state, action) {
      state.data = action.payload;
      //action.payload
    },

    setShowModal(state, action) {
      state.showModal = action.payload.show;
      state.activeProduct = action.payload.product;
    },

    setPage(state, action) {
      state.page = action.payload;
      //action.payload
    },
  },
});

export const { setData, setShowModal, setPage } = filterSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||

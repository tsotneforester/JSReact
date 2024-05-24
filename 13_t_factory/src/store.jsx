import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [...data],
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
  },
});

export const { setData, setShowModal } = filterSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||

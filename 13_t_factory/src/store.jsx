import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [...data],
    color: false,
    colorIndex: null,
    category: false,
    categoryIndex: null,
    freeShipping: false,
    sortPattern: false, //1 - a-z, 2 - z-a
    showModal: false,
    activeProduct: null,
  },
  reducers: {
    //actions
    setData(state, action) {
      state.data = action.payload;
      //action.payload
    },
    setColor(state, action = { payload: false }) {
      if (action.payload.color == state.color) {
        state.color = false;
        state.colorIndex = null;
      } else {
        state.color = action.payload.color;
        state.colorIndex = action.payload.index;
      }

      //action.payload
    },
    setCategory(state, action = { payload: false }) {
      if (action.payload.category == state.category) {
        state.category = false;
        state.categoryIndex = null;
      } else {
        state.category = action.payload.category;
        state.categoryIndex = action.payload.index;
      }
      //action.payload
    },

    setShipping(state, action) {
      state.freeShipping = !state.freeShipping;
    },
    sort(state, action) {
      state.sortPattern = action.payload;
    },
    reset(state, action) {
      state.color = false;
      state.colorIndex = null;
      state.category = false;
      state.categoryIndex = null;
      state.freeShipping = false;
    },
    setShowModal(state, action) {
      state.showModal = action.payload.show;
      state.activeProduct = action.payload.product;
    },
  },
});

export const { setColor, setData, setCategory, setShipping, reset, sort, setShowModal } = filterSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

const { increment } = counterSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||
export const fetchIncrementAsync = () => {
  return async function (dispatch) {
    try {
      const res = await fakeRequest("/dogs/1");
      const data = await res;
      if (data == "data") {
        dispatch(increment());
      }
    } catch (error) {
      console.log(error);
      alert(error + "  ❌ ⛔");
    }
  };
};

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
      resolve("data");
    }
    reject("somethng went wrong");
  });
};

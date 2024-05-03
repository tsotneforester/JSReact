//store.js

import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    taskData: [],
    tempTaskData: [],
    modalOpened: false,
    editTaskID: null,
  },
  reducers: {
    //actions

    setTaskData(state, action) {
      state.taskData = action.payload;
      state.tempTaskData = action.payload;
      //action.payload
    },

    setModalOpened(state, action) {
      state.modalOpened = action.payload;
      state.editTaskID = action.null;
      //action.payload
    },

    setEditTaskID(state, action) {
      state.editTaskID = action.payload;
    },
    setTempTaskData(state, action) {
      state.tempTaskData = action.payload;
      //action.payload
    },
  },
});

export const { setTaskData, setModalOpened, setEditTaskID, setTempTaskData } = noteSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||

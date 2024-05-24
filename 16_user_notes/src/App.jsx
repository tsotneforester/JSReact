import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useSelector, useDispatch } from "react-redux";
import { setTempTaskData } from "./noteSlice";
import ThemeToggler from "./components/ThemeToggler";
// import { root } from "./styled";

//imrse
//rafce

//rfc
//imrr

function App() {
  const taskData = useSelector((state) => state.note.taskData);
  const category = useSelector((state) => state.filter.category);

  const searchText = useSelector((state) => state.filter.searchText);

  const dispatcher = useDispatch();

  useEffect(() => {
    console.log("App ♻");

    let filteredData = [...taskData];

    filteredData = category ? filteredData.filter((e) => e.category == category) : filteredData;

    filteredData = searchText ? filteredData.filter((e) => e.title.includes(searchText)) : filteredData;

    console.log(searchText);

    dispatcher(setTempTaskData(filteredData));
  }, [category, taskData, searchText]);

  return (
    <>
      {/* <ThemeToggler /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
    </>
  );
}

export default App;

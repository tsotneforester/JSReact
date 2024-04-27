import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { setToken } from "./store";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useSelector, useDispatch } from "react-redux";
// import { root } from "./styled";

//imrse
//rafce

//rfc
//imrr

function App() {
  const token = useSelector((state) => state.token);

  const dispatcher = useDispatch();

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      dispatcher(setToken(data));
    }
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={!token ? <Login /> : <Homepage />}></Route> */}
      <Route path="/" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="homepage" element={<Homepage />}></Route>
      {/* <Route path="*" element={<Error />}></Route> */}
    </Routes>
  );
}

export default App;

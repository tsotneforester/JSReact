import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../store";

const Homepage = () => {
  let navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dispatcher = useDispatch();

  function handleLogout() {
    sessionStorage.removeItem("token");
    console.log("to login");
    dispatcher(setToken(null));
    navigate("/");
  }

  return (
    <div>
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;

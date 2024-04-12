import React, { useContext } from "react";
import { AppContext } from "../Context";
import moment from "moment";


function Available() {
  const { dateAvailable } = useContext(AppContext);


  let textNode;

  if (moment(dateAvailable) > moment()) {
    textNode = `Data Available for ${moment(dateAvailable).format("MMMM Do YYYY")}`;
  } else {
    textNode = "";
  }

  return <h1>{textNode}</h1>;
}

export default Available;

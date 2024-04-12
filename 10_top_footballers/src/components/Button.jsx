import React from "react";

function Button({ clickHandler, data }) {
  return <button onClick={clickHandler}>{data.length > 0 ? "Clear All" : "Refresh"}</button>;
}

export default Button;

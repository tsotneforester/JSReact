import React from "react";

function VersusRates({ curr1, rate, curr2 }) {
  return (
    <p>
      1 {curr1} = {rate} {curr2}
    </p>
  );
}

export default VersusRates;

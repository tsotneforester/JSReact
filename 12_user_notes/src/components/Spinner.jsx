import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function Spinner() {
  return (
    <>
      <PulseLoader cssOverride={{ paddingTop: "120px" }} color="#36d7b7" loading={true} size={25} aria-label="Loading Spinner" data-testid="loader" margin={12} />
    </>
  );
}

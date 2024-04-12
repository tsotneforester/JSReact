import React, { useState } from "react";

const Tour = ({ id, image, name, price, setter }) => {
  return (
    <article>
      <img className="background" src={image} />

      <div className="info">
        <h1>{name}</h1>
        <p>starting from</p>
        <h2>{price.toLocaleString("en-US", { minimumFractionDigits: 0, style: "currency", currency: "USD", currencyDisplay: "symbol" })}</h2>
      </div>

      <button
        onClick={() => {
          setter(id);
        }}>
        Not interested
      </button>
    </article>
  );
};

export default Tour;

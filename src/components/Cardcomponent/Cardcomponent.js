// Card.js
import React from 'react';

function Cardcomponent({ name, price, text }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{text}</p>
      <p>${price}</p>
    </div>
  );
}

export default Cardcomponent;
import React from 'react';

const ButtonComponent = ({ openModal }) => {
  return (
    <button onClick={openModal}> New Loan + </button>
  );
};

export default ButtonComponent;

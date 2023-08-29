import React, { useState } from 'react';
import { navigate } from 'gatsby';

const YourComponent = () => {
  const [loanReference, setLoanReference] = useState(null);

  const generateRandomReference = () => {
    // Generate a random loan reference (for demonstration purposes)
    const randomReference = Math.floor(Math.random() * 1000);
    setLoanReference(randomReference);

    // Navigate to the new loan page with dynamic parameter
    navigate(`/NewLoanPage/?loanReference=${loanReference}`);
  };

  return (
    <div>
      <button onClick={generateRandomReference}>Create Loan</button>
    </div>
  );
};

export default YourComponent;

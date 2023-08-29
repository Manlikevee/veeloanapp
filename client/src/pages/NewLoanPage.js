import React, { useEffect, useState } from 'react';

const NewLoanPage = () => {
  const [loanReference, setLoanReference] = useState(null);

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('loanReference');

    setLoanReference(loanReferenceValue);
  }, []);

  return (
    <div>
      <h1>New Loan Page</h1>
      {loanReference && (
        <p>Loan Reference: {loanReference}</p>
      )}
      {/* Add more content as needed */}
    </div>
  );
};

export default NewLoanPage;

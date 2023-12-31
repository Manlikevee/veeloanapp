import React, { useEffect, useState } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout';
import Loanoffer from '../components/Forms/Accountnumform/Loanoffer';


const NewLoanPage = () => {
  const [loanReference, setLoanReference] = useState(null);

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const loanReferenceValue = queryParams.get('loanReference');

    setLoanReference(loanReferenceValue);
  }, []);

  return (
    <Dashboardlayout>

      {loanReference && 
         <Loanoffer />
      }
 
    </Dashboardlayout>
  );
};

export default NewLoanPage;

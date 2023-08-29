import Dashboardlayout from '../components/Dashboard/Dashboardlayout';
import Loanoffer from '../components/Forms/Accountnumform/Loanoffer';
import React, { useEffect, useState } from 'react';


const Userloanoffer = () => {
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
         <Loanoffer refss={loanReference} />
      }
 
    </Dashboardlayout>
  );
};

export default Userloanoffer
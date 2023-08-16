import React from 'react'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loancard from '../components/Dashboard/Loancard/Loancard';
import Loantable from '../components/Dashboard/Loantable/Loantable';


const Loan = () => {
  return (
    <Dashboardlayout>

<Loancard/>

<Loantable/>

    </Dashboardlayout>
  )
}

export default Loan
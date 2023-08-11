import React from 'react'
import Dashboarddata from '../components/Dashboard/Dashboarddata/Dashboarddata'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanplandetail from '../components/Dashboard/Loanexpand/Loanplandetail/Loanplandetail';
import Loanstatus from '../components/Dashboard/Loanexpand/Loanstatus/Loanstatus';
import Loanhistory from '../components/Dashboard/Loanhistory/Loanhistory';



const Loandetail = () => {
  return (
    <Dashboardlayout>
  <Loanplandetail/>

  <Loanstatus/>

    </Dashboardlayout>
  )
}

export default Loandetail
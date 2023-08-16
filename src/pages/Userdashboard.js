import React, { useState } from 'react';
import Dashboarddata from '../components/Dashboard/Dashboarddata/Dashboarddata'
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loanhistory from '../components/Dashboard/Loanhistory/Loanhistory';
import Loanplans from '../components/Loanplanpopup/Loanplans';
function Userdashboard() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log('clickedd')
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Dashboardlayout>
   
   <Dashboarddata  />


   <br />

<Loanhistory openModal={openModal}/>

<Loanplans isOpen={isModalOpen} closeModal={closeModal} />
    
    
    </Dashboardlayout>
  )
}

export default Userdashboard
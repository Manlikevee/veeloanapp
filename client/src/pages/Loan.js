import React, { useState } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'
import Loancard from '../components/Dashboard/Loancard/Loancard';
import Loantable from '../components/Dashboard/Loantable/Loantable';
import Loanplans from '../components/Loanplanpopup/Loanplans';
import Loanpopup from '../components/Dashboard/Loanpopup/Loanpopup';

const Loan = () => {
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

<Loancard />

<Loanpopup openModal={openModal}/>
<Loantable />
<Loanplans isOpen={isModalOpen} closeModal={closeModal} />
    </Dashboardlayout>
  )
}

export default Loan
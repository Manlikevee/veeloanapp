import React, { useEffect, useState } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout';
import Newatm from '../components/Utility/Newatm';
import axiosInstance from '../service/axiosinterceptor';

const Simple = () => {
  const [data, setData] = useState([]);



  return (
    <Dashboardlayout>
    <div>
<Newatm/>

      <ul>
  
      </ul>
    </div>
    </Dashboardlayout>
  );
};

export default Simple;

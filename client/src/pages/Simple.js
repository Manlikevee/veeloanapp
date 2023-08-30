import React, { useEffect, useState } from 'react';
import axiosInstance from '../service/axiosinterceptor';

const Simple = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use axiosInstance for making API requests
    axiosInstance.get('/notes')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        lorem snan asbabs absbdb adbbdba bsba
      <h1>Simple Componentsss</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Simple;

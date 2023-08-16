import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://strapi.isslng.com/isslblogs');
      const data = response.data;
      setBlogPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return React.cloneElement(children, { isLoading, blogPosts });
}

export default DataFetcher;

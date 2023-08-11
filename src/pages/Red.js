import React, { useState, useEffect } from 'react';
import "../components/Landingpage/layout.css";
const MyComponent = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsLargeScreen(window.innerWidth > 900);
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleWindowResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array to run the effect once

  return (
    <div className={`box ${isLargeScreen ? 'red' : 'blue'}`}>
      {/* Your component's content */}
    </div>
  );
};

export default MyComponent;

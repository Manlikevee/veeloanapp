import React, { useEffect, useState } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'

function FullScreenComponent() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Enter full-screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    // Toggle the full-screen state
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    // Function to handle F11 key press
    const handleKeyPress = (e) => {
      if (e.key === 'F11') {
        toggleFullScreen();
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isFullScreen]);

  return (
    <Dashboardlayout>
    <div>
      <p>Press F11 to toggle full-screen mode</p>
      <button onClick={toggleFullScreen}>
        Toggle Full Screen
      </button>
    </div>
    </Dashboardlayout>
  );
}

export default FullScreenComponent;

import React, { useEffect, useState } from 'react';
import Dashboardlayout from '../components/Dashboard/Dashboardlayout'

function FullScreenComponent() {
    const [isFullScreen, setIsFullScreen] = useState(
        sessionStorage.getItem('isFullScreen') === 'true' || false
      );
    
      // Update sessionStorage whenever the isFullScreen state changes
      useEffect(() => {
        sessionStorage.setItem('isFullScreen', isFullScreen.toString());
      }, [isFullScreen]);
    
      // Function to toggle full-screen mode
      const toggleFullScreen = () => {
        if (!isFullScreen) {
          enterFullScreen();
        } else {
          exitFullScreen();
        }
      };
    
      // Function to enter full-screen mode
      const enterFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
        setIsFullScreen(true);
      };
    
      // Function to exit full-screen mode
      const exitFullScreen = () => {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        setIsFullScreen(false);
      };
    
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

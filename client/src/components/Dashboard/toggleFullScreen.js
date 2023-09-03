// fullscreen.js

export function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      alert('dbdb')
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  
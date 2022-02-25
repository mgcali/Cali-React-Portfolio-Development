import React from 'react';
import BackgroundVid from '../Media/background3.mp4';

export default function Background() {
  return (
    <video autoPlay loop muted
    style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      
      minHeight: "100%",
      objectFit: "fill",
      transform: "translate(-50%, -50%",
      zIndex: "-1",
    }}
        >
            <source src={BackgroundVid} type="video/mp4" />
            </video>  
  )
}

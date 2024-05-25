// src/components/Demo.js
import React from 'react';
import './Demo.css'; 
import demoGif from 'C:/Users/harsh/OneDrive/Desktop/SustaiN_Home/src/images/demo.gif'; // Make sure to replace this with the actual path to your GIF

const Demo = () => {
  return (
    <div className="demo-container">
      <h1 className="demo-heading">Demo</h1>
      <div className="demo-divider"></div>
      <p className="demo-description">
        Watch this <a href="https://www.youtube.com/watch?v=hg7rIvsz2Pw&feature=youtu.be" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" /></a> YouTube video for a detailed demonstration.
      </p>
      <div className="demo-gif">
        <img src={demoGif} alt="Demo GIF" />
      </div>
    </div>
  );
};

export default Demo;

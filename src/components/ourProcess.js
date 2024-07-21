// src/components/ourProcess.js
import React from 'react';
import './ourProcess.css'; // Ensure this path is correct
import step1 from '../pictures/step1.jpg';
import step2 from '../pictures/step2.jpg';
import step3 from '../pictures/step3.jpg';
import step4 from '../pictures/step4.jpg';

const OurProcess = () => {
  return (
    <div className="our-process">
      <div className="video-section">
        <h2>Learn about hard work</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Jk9uJRMvBIA"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="how-to-get-started">
        <h2>How to get started</h2>
        <div className="steps-container">
          <div className="step">
            <img src={step1} alt="Step 1" />
            <p>Choose one of the plans below</p>
          </div>
          <div className="step">
            <img src={step2} alt="Step 2" />
            <p>Sign up through the join page</p>
          </div>
          <div className="step">
            <img src={step3} alt="Step 3" />
            <p>Show up to the academy training</p>
          </div>
          <div className="step">
            <img src={step4} alt="Step 4" />
            <p>Become a soccer pro!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

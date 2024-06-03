// src/components/About.js
import React from 'react';
import './About.css';
import HeroImage from './HeroImage';
 // Replace with the actual path to your image

const About = () => {
  return (
    <div>
      <HeroImage />
      <div className="about-container">
        <div className="about-content">
          <h1>About SustaiN</h1>
          <p>
            SustaiN is an effort to enable sustainable nitrogen (N) management in corn and sorghum.
            It helps farmers to know how much inseason N is required to maximize yield and minimize
            N loss. Such practice in a larger region will ensure sustainable crop production practices
            and improved farmer profitability.
          </p>
          <p>
            SustaiN is a "2022 North Central Graduate Student Grant" funded by NCR-SARE.
          </p>
          <button className="learn-more-button" onClick={() => window.open('https://projects.sare.org/sare_project/gnc22-343/', '_blank')}>
            Learn More
          </button>
        </div>
        {/* <div className="about-image">
          <img src={aboutImage} alt="About SustaiN" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
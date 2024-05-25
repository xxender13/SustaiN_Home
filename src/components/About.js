// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
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
  );
};

export default About;

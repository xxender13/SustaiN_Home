// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <p>Sourav Bhadra (Co-PI)</p>
          <p>PhD Candidate</p>
          <p>Geoinformatics and Geospatial Analytics</p>
          <p>Saint Louis University, Saint Louis, MO</p>
          <p>Email: sourav.bhadra@slu.edu</p>
        </div>
        <div className="contact-item">
          <p>Vasit Sagan, PhD (Professor)</p>
          <p>Director, Remote Sensing Lab</p>
          <p>Associate Vice President for Geospatial Science</p>
          <p>Saint Louis University, Saint Louis, MO</p>
          <p>Email: vasit.sagan@slu.edu</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

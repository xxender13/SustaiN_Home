// src/components/Concept.js
import React from 'react';
import conceptImage from 'C:/Users/harsh/OneDrive/Desktop/SustaiN_Home/sustain-app/src/images/concept.png'; // Make sure to replace this with the actual path to your image
import './Concept.css';

const Concept = () => {
  return (
    <div className="concept-container">
      <div className="concept-content">
        <h1>Conceptual Framework</h1>
        <p>
          The concept of SustaiN is built on top of satellite remote sensing and geospatial web application technologies. 
          On the frontend of the DSS, there is a user interface built on top of Streamlit. The backend includes features 
          from GDAL, Geopandas, Rasterio, Planet API to figure out the geographic extent and date input from the user 
          and handles downloading, processing and analyzing the Planet data. The interface can also visualize the result 
          in an interactive fashion.
        </p>
      </div>
      <div className="concept-image">
        <img src={conceptImage} alt="Conceptual Framework" />
      </div>
    </div>
  );
};

export default Concept;

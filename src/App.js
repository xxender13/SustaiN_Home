import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Concept from './components/Concept';
import Demo from './components/Demo';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <section id="about">
        <About />
      </section>
      <section id="concept">
        <Concept />
      </section>
      <section id="demo">
        <Demo />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default App;

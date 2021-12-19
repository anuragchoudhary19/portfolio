import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Footer from './Footer/Footer';
import Introduction from './Introduction/Introduction';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Message /> */}
      <Footer />
    </div>
  );
}

export default App;

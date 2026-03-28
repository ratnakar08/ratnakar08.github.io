import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Snowflakes from './components/Snowflakes';

function V1App({ darkMode, setDarkMode }) {

  return (
    <div className="relative w-full overflow-x-hidden pt-12">
      <div className="fixed top-0 left-0 w-full z-50 bg-red-600 text-white text-center py-1 text-sm font-semibold tracking-wide shadow-md">
        This is my previous portfolio version (v1)
      </div>
      <Snowflakes />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default V1App;

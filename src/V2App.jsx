import { useState, useEffect } from 'react';
import Header from './components/v2/Header';
import Hero from './components/v2/Hero';
import Projects from './components/v2/Projects';
import Experience from './components/v2/Experience';
import Skills from './components/v2/Skills';
import Contact from './components/v2/Contact';
import Footer from './components/v2/Footer';

function V2App({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen font-sans transition-colors duration-500 selection:bg-indigo-500/30 bg-stone-50 text-stone-800 dark:bg-slate-950 dark:text-slate-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-32">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default V2App;

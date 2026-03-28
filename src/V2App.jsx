import { useState } from 'react';
import Header from './components/v2/Header';
import Footer from './components/v2/Footer';
import PortfolioSwitcher from './components/v2/PortfolioSwitcher';
import WebDevPortfolio from './components/v2/views/WebDevPortfolio';
import LeadershipPortfolio from './components/v2/views/LeadershipPortfolio';
import DsaPortfolio from './components/v2/views/DsaPortfolio';

function V2App({ darkMode, setDarkMode }) {
  const [currentDomain, setDomain] = useState('web-dev');

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 selection:bg-indigo-500/30 bg-stone-50 text-stone-800 dark:bg-slate-950 dark:text-slate-200 overflow-x-hidden">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} currentDomain={currentDomain} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-[85vh]">
        {currentDomain === 'web-dev' && <WebDevPortfolio />}
        {currentDomain === 'leadership' && <LeadershipPortfolio />}
        {currentDomain === 'dsa' && <DsaPortfolio />}
      </main>

      <Footer />
      
      <PortfolioSwitcher currentDomain={currentDomain} setDomain={setDomain} />
    </div>
  );
}

export default V2App;

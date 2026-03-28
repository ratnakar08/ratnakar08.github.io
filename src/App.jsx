import { useState, useEffect } from 'react';
import V1App from './V1App';
import V2App from './V2App';

function App() {
  const [version, setVersion] = useState(() => {
    const saved = localStorage.getItem('portfolioVersion');
    return saved ? saved : 'v2';
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolioDarkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('portfolioVersion', version);
  }, [version]);

  useEffect(() => {
    localStorage.setItem('portfolioDarkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative">
      {version === 'v2' ? (
        <V2App darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <V1App darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <button
        onClick={() => setVersion(version === 'v2' ? 'v1' : 'v2')}
        className={`fixed bottom-6 right-6 px-4 py-2 rounded-full font-medium shadow-xl transition-all hover:scale-105 z-50 flex items-center gap-2
          ${version === 'v2' 
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600' 
            : 'bg-stone-800 hover:bg-stone-900 text-white'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        {version === 'v2' ? 'View Past Version (v1)' : 'Back to Current Version (v2)'}
      </button>
    </div>
  );
}

export default App;

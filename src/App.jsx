import { useState, useEffect } from 'react';
import V2App from './V2App';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolioDarkMode');
    return saved ? JSON.parse(saved) : true;
  });

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
      <V2App darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;

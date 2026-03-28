import { Moon, Sun } from 'lucide-react';

function Header({ darkMode, setDarkMode, currentDomain }) {
  const getDomainLabel = () => {
    if (currentDomain === 'web-dev') return "Frontend Focus";
    if (currentDomain === 'leadership') return "Leadership Journey";
    if (currentDomain === 'dsa') return "Problem Solving Mode";
    return "";
  };

  const domainLabel = getDomainLabel();

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-stone-50/80 dark:bg-slate-950/80 border-b border-stone-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <span className="font-bold text-xl tracking-tight text-stone-800 dark:text-slate-100">
              K.R.
            </span>
            {domainLabel && (
              <div className="hidden sm:flex items-center">
                <span className="px-2.5 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 shadow-sm">
                  {domainLabel}
                </span>
              </div>
            )}
          </div>
          <nav className="hidden md:flex space-x-8">
            {currentDomain === 'web-dev' && (
              <>
                <a href="#about" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-medium">About</a>
                <a href="#projects" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-medium">Projects</a>
                <a href="#skills" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-medium">Skills</a>
                <a href="#contact" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-medium">Contact</a>
              </>
            )}
          </nav>
          <div className="flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400 animate-[spin_3s_linear_infinite]" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Moon, Sun } from 'lucide-react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-stone-50/80 dark:bg-slate-950/80 border-b border-stone-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl tracking-tight text-stone-800 dark:text-slate-100">
              K.R.
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">About</a>
            <a href="#projects" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Projects</a>
            <a href="#experience" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Experience</a>
            <a href="#contact" className="text-stone-600 hover:text-stone-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Contact</a>
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

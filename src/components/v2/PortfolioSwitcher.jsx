import { Monitor, Award, TerminalSquare } from 'lucide-react';

function PortfolioSwitcher({ currentDomain, setDomain }) {
  const domains = [
    {
      id: 'web-dev',
      name: 'Web Dev',
      icon: <Monitor className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      id: 'leadership',
      name: 'Leadership',
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      id: 'dsa',
      name: 'DSA',
      icon: <TerminalSquare className="w-5 h-5 md:w-6 md:h-6" />
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-stone-200/50 dark:border-slate-800/50 shadow-2xl shadow-indigo-500/10">
        {domains.map((domain) => {
          const isActive = currentDomain === domain.id;
          return (
            <button
              key={domain.id}
              onClick={() => setDomain(domain.id)}
              className="relative group px-4 py-3 md:px-5 md:py-3.5 rounded-full transition-all duration-300"
              aria-label={domain.name}
            >
              {/* Active Background Pill */}
              {isActive && (
                <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-full shadow-md animate-in zoom-in-90 duration-300"></div>
              )}
              
              <div 
                className={`relative z-10 flex items-center gap-2 transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-stone-500 dark:text-slate-400 group-hover:text-stone-900 dark:group-hover:text-slate-200'}
                `}
              >
                {domain.icon}
                {isActive && (
                  <span className="font-semibold text-sm md:text-base tracking-wide whitespace-nowrap hidden sm:inline-block animate-in fade-in slide-in-from-left-2 duration-300">
                    {domain.name}
                  </span>
                )}
              </div>

              {/* Tooltip for inactive buttons */}
              {!isActive && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-stone-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                  {domain.name}
                  {/* Arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900 dark:border-t-white"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioSwitcher;

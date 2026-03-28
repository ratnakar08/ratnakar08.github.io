function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 dark:border-slate-800 bg-stone-50/50 dark:bg-slate-950/50 backdrop-blur-sm py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-stone-600 dark:text-slate-400 font-medium bg-gradient-to-r from-amber-500 to-orange-500 dark:from-indigo-400 dark:to-purple-500 bg-clip-text text-transparent inline-block">
          Built and improved over time 🚀
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-stone-500 dark:text-slate-500">
          <span>&copy; {new Date().getFullYear()} Kota Ratnakar. All rights reserved.</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-slate-700"></span>
          <span className="px-3 py-1 rounded-full bg-stone-200/50 dark:bg-slate-800/50 font-mono text-xs font-semibold">
            Portfolio v2.0
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

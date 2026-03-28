import { ArrowRight, Mail } from 'lucide-react';

function Hero() {
  return (
    <section id="about" className="flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-300 dark:from-indigo-600 dark:to-purple-600 blur-3xl opacity-30 rounded-full animate-pulse"></div>
        <h1 className="relative text-5xl sm:text-7xl font-extrabold tracking-tight text-stone-900 dark:text-slate-50 mb-2">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:from-indigo-400 dark:to-purple-500">Kota Ratnakar</span>
        </h1>
      </div>
      
      <p className="text-xl sm:text-2xl font-medium text-stone-600 dark:text-slate-300 max-w-2xl">
        Aspiring Developer & Problem Solver
      </p>
      
      <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl leading-relaxed">
        I love turning complex problems into elegant, user-friendly solutions. I specialize in building modern web applications, exploring new technologies, and continuously pushing my boundaries to create impactful software.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a 
          href="#projects" 
          className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-stone-900 dark:bg-slate-100 dark:text-slate-900 rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg dark:hover:shadow-indigo-500/25 gap-2"
        >
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-stone-900 dark:text-slate-100 border-2 border-stone-200 dark:border-slate-800 rounded-full hover:border-stone-400 dark:hover:border-slate-600 transition-all hover:bg-stone-100 dark:hover:bg-slate-800/50 gap-2"
        >
          <Mail className="w-4 h-4" />
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;

import { Code, Boxes, Globe, Puzzle, Layout } from 'lucide-react';

function Skills() {
  const skills = [
    { name: 'React', category: 'Frontend Library', icon: <Code className="w-5 h-5" /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <Layout className="w-5 h-5" /> },
    { name: 'JavaScript', category: 'Language', icon: <Puzzle className="w-5 h-5" /> },
    { name: 'HTML5 & CSS3', category: 'Core Web', icon: <Globe className="w-5 h-5" /> },
    { name: 'Git & GitHub', category: 'Version Control', icon: <Boxes className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-slate-50">
          Core Technologies
        </h2>
        <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl mx-auto">
          The tools I use to build seamless digital experiences.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all dark:hover:shadow-indigo-500/20 hover:-translate-y-1 cursor-default"
          >
            <div className="text-stone-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
              {skill.icon}
            </div>
            <div>
              <h3 className="font-bold text-stone-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs font-medium text-stone-500 dark:text-slate-400 mt-0.5">
                {skill.category}
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/10 dark:group-hover:border-indigo-400/20 rounded-2xl transition-colors pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

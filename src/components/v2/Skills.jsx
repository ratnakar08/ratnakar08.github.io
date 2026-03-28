function Skills() {
  const skills = [
    { name: 'C / C++', level: '90%' },
    { name: 'Java', level: '85%' },
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '90%' },
    { name: 'Git & GitHub', level: '85%' },
    { name: 'React', level: '80%' },
    { name: 'Tailwind CSS', level: '95%' }
  ];

  return (
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-slate-50">
          Core Skills
        </h2>
        <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl mx-auto">
          Technologies I work with to build scalable solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow dark:hover:shadow-indigo-500/10"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-stone-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-indigo-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-sm font-medium text-stone-500 dark:text-slate-400">
                {skill.level}
              </span>
            </div>
            
            <div className="w-full bg-stone-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-amber-500 dark:bg-indigo-500 h-1.5 rounded-full" 
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

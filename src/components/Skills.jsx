export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'Vite', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black border-t border-black dark:border-white text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="border-l-2 border-black dark:border-white pl-6"
            >
              <h3 className="text-sm font-semibold mb-6 uppercase tracking-wide opacity-60">
                {cat.category}
              </h3>
              
              <div className="space-y-2">
                {cat.skills.map((skill, i) => (
                  <p key={i} className="text-base opacity-70">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

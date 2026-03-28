function Experience() {
  const roles = [
    {
      title: 'President',
      organization: 'ECA Club',
      duration: 'Present',
      description: 'Leading a vibrant community of tech enthusiasts, organizing major events, hackathons, and fostering a culture of innovation and continuous learning among members.'
    },
    {
      title: 'Class Representative',
      organization: 'College',
      duration: 'Present',
      description: 'Acting as the primary liaison between students and the faculty, ensuring seamless communication and efficiently resolving academic or administrative challenges.'
    },
    {
      title: 'Placement Support Member',
      organization: 'Placement Cell',
      duration: 'Present',
      description: 'Assisting in organizing placement drives, mentoring peers, and coordinating with prospective employers to facilitate student recruitment.'
    },
    {
      title: 'Lead Organizer',
      organization: 'Sreenidhi Intra College Hackathon',
      duration: 'Past',
      description: 'Spearheaded the planning and execution of an intra-college hackathon, coordinating teams, managing logistics, and securing participation.'
    },
    {
      title: 'Organizer',
      organization: 'National Conference',
      duration: 'Past',
      description: 'Managed key operational elements of a large-scale national conference, ensuring technical sessions ran smoothly and assisting guest speakers.'
    }
  ];

  return (
    <section id="experience" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-slate-50">
          Positions of Responsibility
        </h2>
        <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl mx-auto">
          Leadership roles and organizational experiences that shaped my collaborative skills.
        </p>
      </div>

      <div className="max-w-4xl mx-auto pl-4 border-l-2 border-stone-200 dark:border-slate-800 space-y-12 mt-12 relative">
        {roles.map((role, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[21px] top-6 w-10 h-10 bg-white dark:bg-slate-950 border-4 border-stone-100 dark:border-slate-900 rounded-full flex items-center justify-center p-1">
              <div className="w-full h-full bg-stone-300 dark:bg-slate-700 rounded-full group-hover:bg-amber-500 dark:group-hover:bg-indigo-500 transition-colors"></div>
            </div>

            {/* Content Card */}
            <div className="ml-10 bg-white dark:bg-slate-800/40 p-8 rounded-3xl border border-stone-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-indigo-500/5 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-slate-100">
                    {role.title}
                  </h3>
                  <p className="text-lg font-medium text-amber-600 dark:text-indigo-400">
                    {role.organization}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 dark:bg-slate-800 dark:text-slate-300 w-fit">
                  {role.duration}
                </span>
              </div>
              <p className="text-stone-600 dark:text-slate-400 leading-relaxed">
                {role.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

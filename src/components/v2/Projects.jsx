import { ExternalLink, Github, Construction, Server, Target, CheckCircle2, LayoutDashboard, Lock } from 'lucide-react';

function Projects() {
  const featuredProject = {
    title: 'Sreenidhi Training Scheduler System',
    status: 'In Development 🚧',
    description: 'An internal web-based scheduling and management system for the training department. It provides a single centralized dashboard to seamlessly organize student data, trainer assignments, lab allocations, and complex timetables.',
    problem: 'Manual management of large volumes of student data, schedules, and cross-department resource allocation was inefficient.',
    impact: 'Improves operational efficiency, dramatically reduces manual scheduling errors, and ensures complete visibility across the training department.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    link: '#',
    github: '#'
  };

  const otherProjects = [
    {
      title: 'ECA Official Website',
      status: 'Under Development',
      description: 'Developing the official platform for the ECA Club to centralize all activities, announcements, and updates. Designed to improve engagement and direct communication within the massive student community.',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      highlight: 'Real-world deployment project serving actual user traffic.',
      link: '#',
      github: 'https://github.com/ratnakar08/eca-website',
      isLinkDisabled: true
    },
    {
      title: 'Student Hub Class Portal',
      status: 'In Progress',
      description: 'A centralized utility web platform bringing together students, live class updates, and critical academic resources into one easy-to-use interface rather than scattered communication channels.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
      highlight: 'Features clean dashboard UI, live announcements, and resource sharing.',
      link: 'http://ratnakarkota.me/class_notes/',
      github: 'https://github.com/ratnakar08/class_notes'
    }
  ];

  return (
    <section id="projects" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-slate-50">
          Selected Projects
        </h2>
        <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of real-world utility systems and platforms I'm building.
        </p>
      </div>

      {/* Featured Project */}
      <div className="relative group bg-indigo-50/50 dark:bg-slate-900/60 border border-indigo-100 dark:border-indigo-500/20 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl dark:shadow-indigo-500/10 transition-all">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-900 dark:text-indigo-400 pointer-events-none hidden md:block">
          <Server className="w-48 h-48" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400 rounded-full text-xs font-bold">
              <Construction className="w-4 h-4" />
              Internal System • In Development 🚧
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-slate-100 mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-stone-600 dark:text-slate-300 text-lg leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/60 dark:bg-slate-800/50 rounded-xl p-4 border border-stone-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-rose-500" />
                  <h4 className="font-semibold text-stone-900 dark:text-slate-100">The Problem</h4>
                </div>
                <p className="text-stone-600 dark:text-slate-400 text-sm leading-relaxed">{featuredProject.problem}</p>
              </div>

              <div className="bg-white/60 dark:bg-slate-800/50 rounded-xl p-4 border border-stone-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <h4 className="font-semibold text-stone-900 dark:text-slate-100">The Impact</h4>
                </div>
                <p className="text-stone-600 dark:text-slate-400 text-sm leading-relaxed">{featuredProject.impact}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between space-y-8 lg:border-l lg:border-indigo-200/50 dark:lg:border-indigo-500/20 lg:pl-8">
            <div className="space-y-6">
              <h4 className="font-semibold text-stone-900 dark:text-slate-100">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100/50 dark:bg-indigo-500/20 rounded-full border border-indigo-200 dark:border-indigo-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-indigo-200/50 dark:border-indigo-500/20">
              <div className="flex flex-1 items-center justify-center gap-2 px-4 py-3 bg-stone-100 dark:bg-slate-800/50 text-stone-400 dark:text-slate-500 rounded-xl text-sm font-semibold cursor-not-allowed border border-stone-200 dark:border-slate-800">
                <Lock className="w-4 h-4" />
                Internal Access Only
              </div>
              <div className="flex flex-1 items-center justify-center gap-2 px-4 py-3 bg-stone-100 dark:bg-slate-800/50 text-stone-400 dark:text-slate-500 rounded-xl text-sm font-semibold cursor-not-allowed border border-stone-200 dark:border-slate-800">
                <Github className="w-4 h-4" />
                Confidential Source
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {otherProjects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-stone-200 dark:border-slate-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/10"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-stone-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-stone-100 text-stone-600 dark:bg-slate-800 dark:text-slate-300 whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              <p className="text-stone-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex items-start gap-2 p-3 mb-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-xl">
                <LayoutDashboard className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 leading-relaxed">
                  {project.highlight}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-[10px] font-medium text-stone-600 dark:text-slate-300 bg-stone-100 dark:bg-slate-800 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-stone-100 dark:border-slate-800/50">
                {project.isLinkDisabled ? (
                  <div className="flex items-center gap-2 text-sm font-medium text-stone-400 dark:text-slate-600 cursor-not-allowed">
                    <ExternalLink className="w-4 h-4 opacity-50" />
                    Deploying Soon
                  </div>
                ) : (
                  <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-stone-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                )}

                <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-stone-400 dark:text-slate-500 hover:text-stone-900 dark:hover:text-slate-300 transition-colors">
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

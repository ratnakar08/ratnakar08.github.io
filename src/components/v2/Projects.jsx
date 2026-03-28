import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AQI Prediction & Analysis',
    description: 'An intelligent system that predicts Air Quality Index and analyzes pollutant levels using machine learning models to provide actionable insights.',
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Flask'],
    link: '#',
    github: '#'
  },
  {
    title: 'MealMission',
    description: 'A platform designed to connect food donors with surplus food to NGOs and charities, effectively reducing food wastage and hunger.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    title: 'ECA Club Platform',
    description: 'A dedicated web application for the Emerging Computers Arena club, managing events, registrations, and member interactions.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    link: '#',
    github: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-slate-50">
          Selected Projects
        </h2>
        <p className="text-lg text-stone-500 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of my recent work focusing on solving real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative flex flex-col justify-between bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-stone-200 dark:border-slate-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/10"
          >
            <div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-3 group-hover:text-amber-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium text-stone-600 dark:text-slate-300 bg-stone-100 dark:bg-slate-800 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-stone-100 dark:border-slate-800/50">
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-sm font-medium text-stone-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-slate-500 hover:text-stone-900 dark:hover:text-slate-300 transition-colors"
                >
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

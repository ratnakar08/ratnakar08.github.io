import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
  {
    title: 'AQI Monitor – Air Quality Dashboard',
    description:
      'A full-stack web application with user authentication and a real-time Air Quality Index (AQI) dashboard using geolocation, maps, and external APIs.',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'HTML',
      'CSS',
      'WAQI API',
      'Leaflet.js'
    ],
    github: 'https://github.com/ratnakar08/AQI_monitor',
    live: '#'
  },
  {
    title: 'MealMission – Food Surplus Management System',
    description:
      'A hackathon project focused on reducing food waste by efficiently connecting food providers with NGOs and volunteers through a centralized platform.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL'],
    github: 'https://github.com/ratnakar08/Mealmission1',
    live: '#'
  },
  {
    title: 'LinkedIn Helper – Chrome Extension',
    description:
      'A productivity-focused Chrome extension that enhances LinkedIn usage with quick actions and workflow improvements.',
    tech: ['JavaScript', 'Chrome Extensions API', 'HTML', 'CSS'],
    github: 'https://github.com/ratnakar08/linkedIn-helper',
    live: '#'
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio built using React and Tailwind CSS to showcase projects, skills, and experience with a modern UI.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/ratnakar08/ratnakar08.github.io',
    live: 'http://ratnakarkota.me'
  }
];



  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black border-t border-black dark:border-white text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-black dark:border-white pb-12 last:border-b-0"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="opacity-70 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs opacity-60 border border-black dark:border-white px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-sm hover:opacity-50 transition-opacity flex items-center gap-2"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="text-sm hover:opacity-50 transition-opacity flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Users, Award, Calendar, ChevronRight, Target } from 'lucide-react';

function LeadershipPortfolio() {
  const experiences = [
    {
      role: "President",
      organization: "Emerging Computer's Arena (ECA)",
      period: "2026 - Present",
      description: "Leading the core committee, organizing major events, and managing a large student body.",
      highlights: ["Increased membership by 40%", "Organized 10+ technical and cultural events", "Empowered Competitve Coding culture in SNIST"]
    },
    {
      role: "Class Representative",
      organization: "Computer Science Department",
      period: "2023 - Present",
      description: "Acted as the liaison between students and faculty, addressing academic concerns.",
      highlights: ["Resolved scheduling conflicts", "Facilitated communication for 60+ students"]
    },
    {
      role: "Founder",
      organization: "Intra-College Hackathon - Sreenidhi HackFest",
      period: "2025",
      description: "Spearheaded the planning and execution of the first ever intra-college hackathon.",
      highlights: ["Coordinated with sponsors", "Managed 200+ participants", "Oversaw technical infrastructure"]
    },
    {
      role: "Support Member",
      organization: "Placement Cell",
      period: "2025",
      description: "Assisted students with placement preparation and coordinated with visiting companies.",
      highlights: ["Organized HackWave 2025", "Managed placement drives"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-20">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 rounded-2xl mb-4">
          <Users className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Leadership & Experience
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Building communities, organizing events, and leading teams to create impact.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 dark:before:via-teal-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-teal-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                <Award className="w-4 h-4" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800/50 relative">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">{exp.organization}</p>
                  <p className="text-slate-600 dark:text-slate-300 pt-2">{exp.description}</p>
                  <ul className="pt-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <ChevronRight className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-teal-950/20 p-8 md:p-12 rounded-3xl border border-teal-100 dark:border-teal-900/50">
        <div className="flex items-start gap-6 flex-col md:flex-row">
          <div className="p-4 bg-teal-100 dark:bg-teal-900/50 rounded-2xl text-teal-700 dark:text-teal-300 shrink-0">
            <Target className="w-8 h-8" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What I Learned</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Communication</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Bridging the gap between students, faculty, and external partners effectively.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Execution</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Transforming ideas into large-scale events with structured planning.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Empathy</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Understanding diverse perspectives to resolve conflicts and build cohesive teams.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Adaptability</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Handling last-minute changes and crisis management during live events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeadershipPortfolio;

import { Terminal, Code2, Database, GitBranch, TerminalSquare, Box, Server, LayoutTemplate } from 'lucide-react';

function DsaPortfolio() {
  const topics = [
    { name: "Arrays & Strings", level: "Advanced", problems: "150+", icon: <Box className="w-5 h-5" /> },
    { name: "Trees & Graphs", level: "Intermediate", problems: "80+", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Dynamic Programming", level: "Intermediate", problems: "50+", icon: <Database className="w-5 h-5" /> },
    { name: "System Design", level: "Beginner", problems: "20+", icon: <Server className="w-5 h-5" /> }
  ];

  const platforms = [
    { name: "LeetCode", username: "@ratnakar", rating: "1800+", url: "https://leetcode.com/u/ratnakar__k08/" },
    { name: "Codeforces", username: "ratnakar_08", rating: "1000+", url: "https://codeforces.com/profile/Ratnakark08" },
    { name: "CodeChef", username: "ratnakark08", rating: "2 Star", url: "https://www.codechef.com/users/ratnakark08" },
    { name: "GitHub", username: "ratnakar08", rating: "1k+ commits", url: "https://github.com/ratnakar08" }
  ];

  return (
    <div className="animate-in fade-in duration-500 font-mono space-y-16 max-w-5xl mx-auto">
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 text-sm font-bold mb-6">
          <TerminalSquare className="w-4 h-4" />
          <span>init problem-solving-mode</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
          Data Structures & Algorithms
        </h1>
        <p className="mt-4 text-emerald-600 dark:text-emerald-400 text-lg">
          ~ $ echo "Optimizing time and space complexities one problem at a time."
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
            <Code2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Coding Profiles</h2>
          </div>
          <div className="grid gap-4">
            {platforms.map((platform, idx) => (
              <a key={idx} href={platform.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 transition-colors hover:border-emerald-500 dark:hover:border-emerald-500">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{platform.username}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 rounded text-xs font-bold">
                      {platform.rating}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
            <LayoutTemplate className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Topics Mastery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900 dark:text-white">
                  {topic.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{topic.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">{topic.level}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{topic.problems}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e1e1e] rounded-xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-emerald-400">
        <div className="absolute top-0 left-0 w-full h-8 bg-[#323233] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 text-xs ml-2 font-sans font-medium">bash - dsa-insights</span>
        </div>
        <div className="pt-8 space-y-2">
          <p><span className="text-blue-400">ratnakar@macbook</span> <span className="text-slate-300">~ %</span> ./get_stats.sh</p>
          <p className="animate-pulse">Loading problem solving statistics...</p>
          <div className="pt-2 text-slate-300">
            <p>[*] Most recent topic: Graph Traversal (DFS/BFS)</p>
            <p>[*] Current streak: 66 days</p>
            <p>[*] Favorite paradigm: Divide and Conquer</p>
          </div>
          <p className="pt-2"><span className="text-blue-400">ratnakar@macbook</span> <span className="text-slate-300">~ %</span> <span className="animate-pulse block inline-block w-2 sm:inline bg-slate-400">&nbsp;</span></p>
        </div>
      </section>
    </div>
  );
}

export default DsaPortfolio;

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-3xl w-full">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Full Stack Developer
        </h1>

        <p className="text-lg md:text-xl mb-12 opacity-70 max-w-2xl leading-relaxed">
          I build clean, functional web applications. Currently focused on React, Node.js, and modern web technologies.
        </p>

        <div className="flex gap-6 items-center">
          <a href="https://github.com/ratnakar08" className="hover:opacity-50 transition-opacity">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kota-ratnakar" className="hover:opacity-50 transition-opacity">
            <Linkedin size={24} />
          </a>
          <a href="mailto:kotaratna225@gmail.com" className="hover:opacity-50 transition-opacity">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

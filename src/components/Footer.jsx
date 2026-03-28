import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-black dark:border-white py-12 px-6 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Kota Ratnakar</h3>
            <p className="text-sm opacity-70">
              Full stack developer building clean web applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide opacity-60">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:opacity-50 transition-opacity">About</a></li>
              <li><a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a></li>
              <li><a href="#skills" className="hover:opacity-50 transition-opacity">Skills</a></li>
              <li><a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide opacity-60">Social</h4>
            <div className="flex gap-4">
              <a href="https://github.com/ratnakar08" className="hover:opacity-50 transition-opacity">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kota-ratnakar" className="hover:opacity-50 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kotaratna225@gmail.com" className="hover:opacity-50 transition-opacity">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black dark:border-white pt-8 text-center text-xs opacity-60">
          <p>
            © {currentYear} Kota Ratnakar. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

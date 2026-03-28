import Hero from '../Hero';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

function WebDevPortfolio() {
  return (
    <div className="space-y-32 animate-in fade-in duration-500">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default WebDevPortfolio;

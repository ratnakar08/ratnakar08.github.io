import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['About', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-black dark:border-white text-black dark:text-white">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">
          Kota Ratnakar
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-black dark:border-white">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm hover:opacity-50 transition-opacity"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

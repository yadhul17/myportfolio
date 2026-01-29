import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import TextPressure from './TextPressure.jsx';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home', href: '/' },
    { name: 'SKILLS', id: 'skills', href: '#skills' },
    { name: 'ABOUT', id: 'about', href: '#about' },
    { name: 'CONTACT', id: 'contact', href: '#contact' },
  ];

  const getLinkStyles = (section) => {
    const isActive = activeSection === section;
    return `relative group transition-colors duration-300 ${
      isActive ? 'text-purple-400' : 'text-white'
    }`;
  };

  const getUnderlineStyles = (section) => {
    const isActive = activeSection === section;
    return `absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`;
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 h-20 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 md:px-10 z-50">
      
      {/* LEFT: Logo */}
      <div className="flex-1 flex items-center justify-start">
        <div className="text-3xl md:text-5xl">
          <TextPressure
            text="yadhul"
            flex={true}
            minFontSize={38}
            textColor="white"
            // ... other props
          />
        </div>
      </div>

      {/* CENTER: Desktop Nav Links */}
      <div className="hidden md:flex flex-1 items-center justify-end space-x-10">
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} className={getLinkStyles(link.id)}>
            <span className="relative z-10 hover:text-purple-400 uppercase font-medium text-sm tracking-widest">
              {link.name}
            </span>
            <span className={getUnderlineStyles(link.id)}></span>
          </a>
        ))}
      </div>

      {/* RIGHT: Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-[#020617] border-b border-white/10 md:hidden flex flex-col items-center py-6 space-y-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-lg uppercase tracking-widest font-medium ${
                  activeSection === link.id ? 'text-purple-400' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

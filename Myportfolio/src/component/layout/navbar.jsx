import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react or use SVG
import TextPressure from './TextPressure.jsx';

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

  return (
    <nav className="w-full fixed top-0 h-20 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 flex items-center  justify-between px-6 md:px-10 z-50">
      
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

     

      

      
    </nav>
  );
};

export default Navbar;
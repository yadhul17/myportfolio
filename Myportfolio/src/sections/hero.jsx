import React from 'react';
import RotatingText from '../component/layout/RotatingText.jsx';
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const tags = ['React', 'Django', 'Python', 'Flask'];

  return (
    <div className="flex flex-col mt-20 md:mt-30 relative items-center justify-center z-10 text-center p-4 sm:p-6 w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        /* mx-auto is the fix for the left-shift you saw in the screenshot */
        className="flex flex-col relative items-center justify-center w-full max-w-4xl mx-auto"
      >
        {/* Name and Title */}
        <div className="w-full pt-10 md:pt-20 px-2 flex flex-col items-center">
          <h1 className="font-verity font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-center">
            I'm Yadhul Jayakumar
          </h1>

          <div className="flex justify-center mb-8 w-full px-4">
            <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm flex justify-center items-center mx-auto">
              <RotatingText
                texts={['Web Developer', 'Python Developer', 'React Developer']}
                mainClassName="px-2 py-1 md:px-3 md:py-2 bg-transparent border border-white text-white overflow-hidden flex justify-center rounded-lg text-lg md:text-2xl font-medium tracking-wide"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 w-full px-2 sm:px-4">
            {tags.map((tech) => (
              <div 
                key={tech} 
                className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm text-white transition-all hover:border-cyan-500/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {tech}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-md sm:max-w-none px-6">
            <a 
              href="#project" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-xs sm:text-sm tracking-wider">PROJECTS</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1 text-purple-400" />
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail size={18} className="relative z-10 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="relative z-10 uppercase tracking-wider text-xs sm:text-sm">Contact Me</span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-6 pb-10 w-full">
          <div className="flex gap-8 justify-center">
            <a href="https://github.com/yadhul17" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yadhul-jayakumar-0212552b8/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
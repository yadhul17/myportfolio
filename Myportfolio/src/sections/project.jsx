import React from 'react';
import { motion } from 'framer-motion';
import Container from '../component/common/container';
import project from '../assets/aura.png';
import drive from '../assets/mydrive.png';
import ticket from '../assets/ticket.jpg';
import fund  from '../assets/fund.png';

const Project = () => {
  const projects = [
    {
      title: "TBS ENGINE",
      description: "A full-stack movie ticketing platform with a pixel-perfect BookMyShow UI. Admin portal to manage movies, theaters, and seat layouts. Interactive seat selection and reservation system. End-to-end booking flow from discovery to ticket. Relational database for theater and show management.",
      image: ticket,
      tags: ["Python", "HTML", "CSS", "Django"],
      xInitial: -50,
      yInitial: 0
    },
    {
      title: "Aura Perfumes – Premium Store",
      image: project,
      description: "A full-stack e-commerce web application designed to provide a seamless shopping experience for luxury fragrances.",
      tags: ["Python", "Django", "SQLite", "render", "Git"],
      link: "https://ecommerce-k4mk.onrender.com/",
      github: "https://github.com/yadhul17/ecommerce",
      xInitial: 0,
      yInitial: 50
    },
    {
      title: "Storage System",
      description: "A full-stack storage platform featuring Google OAuth for secure authentication and integrated SMTP services for automated email notifications. Developed using Django, the application provides a private vault where users can upload and manage images and documents with strict data isolation, ensuring files are exclusively accessible to their owners. It demonstrates expertise in handling complex media storage, secure backend logic, and seamless third-party integrations.",
      image: drive,
      tags: ["Django", "Python", "PythonAnywhere", "Tailwind"],
      xInitial: 50,
      yInitial: 0
    },
    {
      title: "Fundwave",
      description: "A secure, full-stack crowdfunding platform featuring Google OAuth for seamless user authentication and integrated SMTP services for automated donation receipts and campaign updates. Built with Django, the application ensures strict data isolation, allowing creators to securely manage sensitive campaign documents and media vaults accessible only to authorized owners. The platform demonstrates expertise in robust backend logic, complex media storage handling, and seamless third-party integrations tailored for secure fundraising.",
      image: fund,
      tags: ["Django", "Python", "PythonAnywhere", "Tailwind"],
      link: "https://yadhul.pythonanywhere.com",
      github: "https://github.com/yadhul17/CFS",
      xInitial: 50, 
      yInitial: 0
    },
    {
      title: "chatboat",
      description: "An AI chatbot built with Ollama for local, privacy-first language model inference. Runs entirely offline, eliminating API costs and latency while keeping conversations completely private. Built with [DJANGO/Python/OLLAMA etc.] and integrates Ollama's REST API to serve real-time, context-aware responses",
      image: fund,
      tags: ["Django", "Python", "Tailwind","ollama"],
      github: "https://github.com/yadhul17/chatboat",
      xInitial: 50, 
      yInitial: 0
    }
  ];

  return (
    <section className='relative w-full min-h-screen z-10 py-20 bg-transparent' id="project">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            PROJECTS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Changed layout wrapper to fit content nicely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 sm:px-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: project.xInitial, y: project.yInitial }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: index * 0.15
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-500/50 transition-colors duration-500"
            >
              <div>
                <div className="h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                  />
                </div>

                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Container */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-4 mt-auto">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors duration-300"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Source Code &rarr;
                  </a>
                )}
              </div>

              {/* Bottom Glow bar */}
              <div className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Project;
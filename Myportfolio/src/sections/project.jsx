import React from 'react';
import { motion } from 'framer-motion';
import Container from '../component/common/container';
import project from '../assets/aura.png'; 
import drive from '../assets/mydrive.png';
import ticket from '../assets/ticket.jpg'

const Project = () => {
  const projects = [
    {
      title: "TBS ENGINE",
      description:" A full-stack movie ticketing platform with a pixel-perfect BookMyShow UI.Admin portal to manage movies, theaters, and seat layoutsInteractive seat selection and reservation systemEnd-to-end booking flow from discovery to ticketRelational database for theater and show management",
      image: ticket,
      tags: ["Python", "HTML","css", "Django"],
      xInitial: -50, // More pronounced movement
      yInitial: 0
    },
    {
      title: "Aura Perfumes – Premium Store",
      image: project,
      description: "A full-stack e-commerce web application designed to provide a seamless shopping experience for luxury fragrances.",
      tags: ["python", "django", "sqllite", "AWS", "git"],
      xInitial: 0,
      yInitial: 50 // Slide up from bottom
    },
    {
      title: " Storage System ",
      description: " A full-stack storage platform featuring Google OAuth for secure authentication and integrated SMTP services for automated email notifications. Developed using Django, the application provides a private vault where users can upload and manage images and documents with strict data isolation, ensuring files are exclusively accessible to their owners. It demonstrates expertise in handling complex media storage, secure backend logic, and seamless third-party integrations.",
      image: drive,
      tags: ["django", "python", "pythonanywhere","tailwind"],
      xInitial: 50, // Come from right
      yInitial: 0
    }
  ];

  return (
    <section className='relative w-full min-h-screen z-10 py-20 bg-transparent' id="project">
      <Container>
        {/* Section Heading with subtle scale-up */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: project.xInitial, y: project.yInitial }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              // Spring physics makes it feel bouncy and organic
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
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-500/50 transition-colors duration-500"
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="p-6">
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
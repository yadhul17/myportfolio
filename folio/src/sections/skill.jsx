import React, { useState } from "react";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss, SiDjango, SiMysql, SiMongodb, SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "Django", icon: SiDjango, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
];

const Skills = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // Cards appear one by one
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="relative py-28 overflow-hidden text-gray-200"
    >
      {/* Mouse-follow glow */}
      

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Skills & <span className="text-sky-400">Tools</span>
          </h2>
          <p className="mt-4 text-gray-400">Technologies I work with</p>
        </motion.div>

        {/* Skills Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(56, 189, 248, 0.4)"
              }}
              className="
                group relative h-32 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                flex flex-col items-center justify-center
                transition-colors duration-300
              "
            >
              <Icon className={`text-4xl ${color} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all`} />
              <span className="mt-3 text-sm opacity-80">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
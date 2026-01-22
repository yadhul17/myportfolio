import React from "react";
import { Rocket, Laptop, Download } from "lucide-react";
import yadhul from "../assets/my.png"; 
import TextType from "../component/layout/TextType";

const About = () => {
  const stats = [
    { icon: Rocket, label: "Projects Completed", value: "5+" },
    { icon: Laptop, label: "Technologies", value: "20+" },
  ];

  return (
    <section id="about" className="py-24 relative  overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          
          {/* Left Side: 300px Image with Lightning Border Effect */}
          <div className="relative flex-shrink-0 group cursor-pointer">
            
            {/* The "Lightning" Purple Glow - Hidden by default, grows on hover */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 shadow-[0_0_30px_rgba(147,51,234,0.6)]" />

            {/* Image Container */}
            <div className="relative w-[300px] h-[400px] rounded-[1.8rem] overflow-hidden  border border-white/10 z-10 transition-transform duration-500 group-hover:scale-[0.98]">
              <img
                src={yadhul} 
                alt="Yadhul Jayakumar"
                className="w-full h-full object-cover grayscale contrast-125 brightness-100 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
              />
              
              {/* Subtle Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left pt-4">
            <div className="space-y-4">
              <span className="text-purple-500 font-semibold uppercase tracking-widest text-sm">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Turning ideas into <span className="text-gray-500 italic">reality</span>
              </h2>
              
              <div className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                I’m <span className="text-white font-bold tracking-wider">YADHUL JAYAKUMAR</span>
                <div className="inline-block ml-1">
                  <TextType 
                    text={[" a passionate full-stack python developer building dynamic web applications using Django."]}
                    typingSpeed={40}
                    showCursor
                    cursorCharacter="_"
                  />
                </div>
                
                <p className="mt-6 text-base opacity-90">
                  As a Python InternI specialize in architecting robust backends and clean frontends. I focus on making every line of code purposeful and every user interaction meaningful.
                </p>
              </div>
            </div>

            {/* Stats & Actions */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8">
              <div className="flex gap-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                   {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="h-px w-12 hidden sm:block self-center" />
              
              <a 
  href="../assets/resume.pdf" // Path to the file in your public folder
  download="Yadhul_Jayakumar_CV.pdf" // The name the file will have when downloaded
  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group shadow-lg shadow-purple-900/10 underline-none"
>
  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-purple-400" />
  <span className="text-sm font-semibold tracking-wide">Download CV</span>
</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
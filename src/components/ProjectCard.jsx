"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Mail, Linkedin, Menu, X, ChevronRight, Code, Terminal, Coffee, Zap } from 'lucide-react';

// ProjectCard Component with developer-focused dark design
function ProjectCard({ project }) {
  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Code-style corner accent */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
      
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-xl mb-6 border border-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
          
          {/* Code overlay effect */}
          <div className="absolute top-3 left-3 flex gap-1">
            <div className="w-3 h-3 bg-red-400 rounded-full opacity-80"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Code size={18} className="text-cyan-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack with terminal-style appearance */}
        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={14} className="text-green-400" />
            <span className="text-green-400 font-mono text-sm">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 border border-gray-600 text-cyan-300 rounded-md text-sm font-mono hover:border-cyan-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Links with developer styling */}
        <div className="flex gap-3">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              className="flex items-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-black rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>View</span>
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              <span>Source</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Terminal-style typing animation component
function TerminalText({ text, delay = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

// Main Developer Portfolio Component
export default function DarkDeveloperPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "DirectNaukri Job Platform",
      description:
        "Full-stack job platform with subscription model, real-time notifications, and payment processing. Built with modern serverless architecture.",
      techStack: ["Next.js 14", "MongoDB", "Stripe API", "Vercel", "Tailwind"],
      liveLink: "https://www.directnaukri.in/",
      githubLink: "https://github.com/okbaghel",
      image:
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    },
    {
      id: 2,
      title: "ScratchClone",
      description:
        "Scratch clone website there are some operations performs .",
      techStack: ["React", "Tailwind CSS", "Lucide Icons"],
      liveLink: "https://scratchapp-clone.vercel.app/",
      githubLink: "https://github.com/okbaghel",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "SmartScrap",
      description:
        "SmartScrap is a system by which we can manage the garbage or waste from the society.",
      techStack: ["next", "mongodb", "cleark",],
      liveLink: "https://smartscrap.vercel.app/",
      githubLink: "https://github.com/okbaghel",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
  ];

  const skills = [
      { name: 'React/Next.js', level: 95, icon: '⚛️' },
    { name: 'JavaScript/TypeScript', level: 90, icon: '🟨' },
    { name: 'Node.js/Express', level: 85, icon: '🟢' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Java/C++', level: 90, icon: '🐳' },
    { name: 'GraphQL/REST APIs', level: 85, icon: '🔗' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <Code size={20} className="text-black" />
              </div>
              <span className="text-xl font-bold font-mono text-cyan-400">Yogesh.portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-mono relative group"
                >
                  <span className="text-cyan-400 mr-1">./</span>{item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 border border-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-300 font-mono"
                >
                  <span className="text-cyan-400 mr-1">./</span>{item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 sm:py-20">
            {/* Terminal Window */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-2 text-gray-400 text-sm font-mono">terminal</span>
                </div>
                <div className="p-6">
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">➜</span>
                      <span className="text-cyan-400">~</span>
                      <span className="text-gray-300">whoami</span>
                    </div>
                    <div className="text-white ml-6">Full Stack Developer</div>
                    
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-green-400">➜</span>
                      <span className="text-cyan-400">~</span>
                      <span className="text-gray-300">cat about.txt</span>
                    </div>
                    <div className="text-white ml-6">
                      <TerminalText text="Building scalable web applications with modern technologies..." delay={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-100">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono">
                  &lt; Yogeshhh /&gt;
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Passionate <span className="text-cyan-400 font-mono">MERN Stack Developer</span> crafting 
                digital experiences with clean code and innovative solutions.
              </p>
              
              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 font-mono text-sm">Available for new opportunities</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25 font-medium text-lg"
                >
                  <Code size={20} />
                  View Projects
                  <ChevronRight size={20} />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium text-lg font-mono"
                >
                  {"{ contact: 'me' }"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cyan-400 font-mono">&lt;/</span>
              About
              <span className="text-cyan-400 font-mono">&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal size={20} className="text-green-400" />
                  <span className="text-green-400 font-mono">console.log("about_me")</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Hi, I am Yogesh Baghel I am a software developer who loves solving problems and building simple, useful solutions. I enjoy learning new technologies and working on projects that make a real impact.
                </p>
                
              </div>

              {/* Skills with progress bars */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={20} className="text-yellow-400" />
                  <span className="text-yellow-400 font-mono">skills.map()</span>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-mono text-sm flex items-center gap-2">
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Coffee size={24} className="text-yellow-400" />
                  <span className="text-gray-300 font-mono">fueled by coffee</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">Final Year</div>
                    <div className="text-gray-400 text-sm">CSE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">2+</div>
                    <div className="text-gray-400 text-sm">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">∞</div>
                    <div className="text-gray-400 text-sm">Lines of Code</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 font-mono">24/7</div>
                    <div className="text-gray-400 text-sm">Learning Mode</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cyan-400 font-mono">const </span>
              projects<span className="text-cyan-400 font-mono"> = [</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto font-mono">
              // Showcasing my latest work and creative solutions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <span className="text-cyan-400 font-mono text-2xl">];</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
              // Let's collaborate and build something amazing together! 🚀
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-400 font-mono">
                <span className="text-cyan-400">return</span> {"{"}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ml-6">
                <Link
                  href="mailto:yogeshbaghel09.in@gmail.com"
                  className="flex items-center gap-3 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-black rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-medium font-mono"
                >
                  <Mail size={20} />
                  email: "contact"
                </Link>
                
                <Link
                  href="https://github.com/okbaghel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium font-mono"
                >
                  <Github size={20} />
                  github: "code"
                </Link>
                
                <Link
                  href="https://www.linkedin.com/in/yogesh-baghel-14a34a239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium font-mono"
                >
                  <Linkedin size={20} />
                  linkedin: "network"
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 font-mono">
                {"}"};
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <span className="text-cyan-400 font-mono text-2xl"></span>
          </div>
          
          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 font-mono">
              <span className="text-gray-600">//</span> Built with nextJS, Tailwind CSS, and lots of ☕
            </p>
            <p className="text-gray-500 font-mono mt-2">
              © 2025 Yogesh Baghel
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
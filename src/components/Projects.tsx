
import React from 'react';
import { Github, ExternalLink, Code, ShoppingCart, Vote, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "A comprehensive e-commerce platform replicating Amazon's core functionality with modern web technologies. Features include product catalog, shopping cart, user authentication, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
      github: "https://github.com/cunningfrog/Amazon.com-clone.git",
      icon: ShoppingCart,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-500/10 to-yellow-500/10"
    },
    {
      title: "Election Management System",
      description: "A robust digital voting platform designed to streamline election processes. Includes voter registration, candidate management, secure voting mechanisms, and real-time result tracking.",
      tech: ["React", "Node.js", "SQL", "Express"],
      github: "https://github.com/helibeb/election_management_system.git",
      icon: Vote,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Array & Linked List Visualizer",
      description: "An interactive educational tool that provides visual representation of data structures. Helps students understand array operations and linked list manipulations through dynamic animations.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS", "Algorithms"],
      github: "https://github.com/helibeb/array_linkedlist_visual_representation.git",
      icon: BarChart3,
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Showcasing my passion for creating innovative and impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all duration-300 hover:scale-110 group/btn"
                      >
                        <Github size={20} className="text-gray-400 group-hover/btn:text-white transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Code size={16} />
                      <span className="text-sm">View Source Code</span>
                    </div>
                    <div className={`h-px flex-1 mx-4 bg-gradient-to-r ${project.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium`}
                    >
                      <span>Explore</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

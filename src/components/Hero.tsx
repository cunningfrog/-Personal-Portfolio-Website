
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div 
          ref={heroRef}
          className="transform-gpu perspective-1000 transition-transform duration-100 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Harsh Pandey
                </span>
              </h1>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"></div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-gray-300 mb-2">
                Computer Science Student & Full Stack Developer
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Building innovative solutions with modern technologies
              </p>
            </div>
            
            <div className="animate-fade-in flex justify-center space-x-6 mb-12" style={{ animationDelay: '0.4s' }}>
              <a 
                href="mailto:harshpandey2601@gmail.com"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://github.com/cunningfrog"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-purple-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/harsh-pandey-5aa081236/"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="animate-bounce mt-16">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

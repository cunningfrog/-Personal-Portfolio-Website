
import React from 'react';
import { MapPin, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing <span className="text-blue-400 font-semibold">B.Tech in Computer Science</span> at 
                <span className="text-purple-400 font-semibold"> SRM Institute of Science and Technology, Chennai</span>. 
                Maintaining excellent academic performance with strong foundation in programming and software development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Based in <span className="text-purple-400 font-semibold">Gurgaon, India</span>. 
                Open to remote opportunities and excited about collaborating on innovative projects worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate about <span className="text-green-400 font-semibold">full-stack development</span> and creating 
                user-centric applications. Love solving complex problems and continuously learning new technologies 
                to build impactful solutions.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With a <span className="text-blue-400 font-semibold">strong foundation in both technical and soft skills</span> 
                  honed at SRMIST, I specialize in project management and coding, particularly in 
                  <span className="text-purple-400 font-semibold"> C++, Java, and JavaScript</span>.
                </p>
                <p>
                  Known for my <span className="text-green-400 font-semibold">efficiency in time management and clear communication</span>, 
                  I consistently deliver high-quality projects, utilizing teamwork to meet and often exceed expectations.
                </p>
                <p>
                  My portfolio includes diverse projects from 
                  <span className="text-yellow-400 font-semibold"> e-commerce solutions to data visualization tools</span>, 
                  demonstrating my versatility and problem-solving capabilities in modern web development.
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

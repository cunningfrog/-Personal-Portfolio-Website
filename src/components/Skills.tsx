
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "React", level: 75, color: "from-cyan-500 to-blue-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 70, color: "from-green-500 to-green-600" },
        { name: "C++", level: 85, color: "from-blue-600 to-purple-600" },
        { name: "C#", level: 75, color: "from-purple-500 to-purple-600" },
        { name: "SQL", level: 80, color: "from-indigo-500 to-blue-600" },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90, color: "from-pink-500 to-red-500" },
        { name: "Team Collaboration", level: 85, color: "from-emerald-500 to-green-500" },
        { name: "Time Management", level: 88, color: "from-violet-500 to-purple-500" },
        { name: "Communication", level: 82, color: "from-teal-500 to-cyan-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left scale-x-0 animate-scale-x transition-transform duration-1000 ease-out`}
                          style={{ 
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                            '--tw-scale-x': skill.level / 100 
                          } as React.CSSProperties}
                        />
                      </div>
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-30 blur-sm`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

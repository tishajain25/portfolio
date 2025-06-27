
const Skills = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Next.js', icon: '▲', color: 'text-black dark:text-white', bg: 'bg-gray-100 dark:bg-gray-800' },
    { name: 'JavaScript', icon: '🟨', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'TypeScript', icon: '📘', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Python', icon: '🐍', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Java', icon: '☕', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'HTML5', icon: '🌐', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'CSS3', icon: '🎨', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'MySQL', icon: '🐬', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Git', icon: '📚', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'TensorFlow', icon: '🧠', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'Flutter', icon: '🦋', color: 'text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Figma', icon: '🎯', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    { name: 'Linux', icon: '🐧', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
            >
              <div className={`text-4xl mb-3 p-4 rounded-full ${tech.bg} group-hover:animate-bounce`}>
                {tech.icon}
              </div>
              <span className={`font-semibold text-sm ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                {tech.name}
              </span>
              
              {/* Skill Level Indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-bold">★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Recognition */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Certifications & Recognition
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Microsoft Azure AI Fundamentals", 
                org: "Microsoft", 
                verified: true,
                icon: "🏆",
                color: "from-blue-500 to-blue-600"
              },
              { 
                name: "Technical Content Writer", 
                org: "Industry", 
                verified: true,
                icon: "✍️",
                color: "from-purple-500 to-purple-600"
              },
              { 
                name: "DevOps Book Co-author", 
                org: "Published", 
                verified: true,
                icon: "📚",
                color: "from-green-500 to-green-600"
              },
              { 
                name: "Research Intern", 
                org: "IIT Patna", 
                verified: true,
                icon: "🔬",
                color: "from-orange-500 to-orange-600"
              }
            ].map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                {/* Glass morphism background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    {cert.org}
                  </p>
                  {cert.verified && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
                      <span>✓</span>
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500/20 rounded-full blur-sm group-hover:bg-teal-500/40 transition-colors duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

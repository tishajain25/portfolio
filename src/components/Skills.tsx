const Skills = () => {
  const skillCategories = {
    'Frontend': [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'text-black dark:text-white', bg: 'bg-gray-100 dark:bg-gray-800' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg', color: 'text-teal-500', bg: 'bg-teal-100 dark:bg-teal-900/30' },
    ],
    'Backend': [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'text-gray-600', bg: 'bg-gray-100 dark:bg-gray-800' },
    ],
    'Database': [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'text-indigo-600', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    ],
    'DevOps & Cloud': [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    ],
    'AI & Others': [
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: 'text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    ]
  };

    const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      type: "Certification",
      icon: "🏆",
      gradientClass: "from-yellow-500 to-orange-600",
      hoverBg: "hover:bg-yellow-50 dark:hover:bg-yellow-900/10",
      year: "2025"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      organization: "Microsoft",
      type: "Certification",
      icon: "🏆",
      gradientClass: "from-blue-500 to-blue-600",
      hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/10",
      year: "2023"
    },
    {
      title: "DevOps Book Co-author",
      organization: "Published Work",
      type: "Publication",
      icon: "📚",
      gradientClass: "from-green-500 to-green-600",
      hoverBg: "hover:bg-green-50 dark:hover:bg-green-900/10",
      year: "2023"
    },
    {
      title: "Research Intern",
      organization: "IIT Patna",
      type: "Research Experience",
      icon: "🔬",
      gradientClass: "from-orange-500 to-orange-600",
      hoverBg: "hover:bg-orange-50 dark:hover:bg-orange-900/10",
      year: "2024"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        {/* Skills layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16">
          {/* Left Column */}
          <div className="space-y-12 md:space-y-16 relative">
            {/* Decorative element */}
            <div className="absolute -left-4 top-10 h-full w-1 bg-gradient-to-b from-teal-500/30 to-blue-500/20 rounded-full hidden md:block"></div>
            
            {/* Frontend Section */}
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="relative mr-2 group">
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal-500 rounded"></span>
                  Frontend
                </span>
                <span className="text-xs font-normal text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-0.5 rounded-full ml-2">
                  UI/UX
                </span>
              </h3>
              <div className="flex flex-wrap gap-6 mt-4">
                {skillCategories['Frontend'].map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.classList.add('hidden');
                          fallback?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-5 h-5 hidden text-xs font-medium">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <span className="font-medium text-sm">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Section */}
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="relative mr-2 group">
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded"></span>
                  Backend
                </span>
                <span className="text-xs font-normal text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full ml-2">
                  Server-side
                </span>
              </h3>
              <div className="flex flex-wrap gap-6 mt-4">
                {skillCategories['Backend'].map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.classList.add('hidden');
                          fallback?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-5 h-5 hidden text-xs font-medium">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <span className="font-medium text-sm">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Database Section */}
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="relative mr-2 group">
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500 rounded"></span>
                  Database
                </span>
                <span className="text-xs font-normal text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded-full ml-2">
                  Storage
                </span>
              </h3>
              <div className="flex flex-wrap gap-6 mt-4">
                {skillCategories['Database'].map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.classList.add('hidden');
                          fallback?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-5 h-5 hidden text-xs font-medium">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <span className="font-medium text-sm">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-16 relative">
            {/* Decorative element */}
            <div className="absolute -left-4 top-10 h-full w-1 bg-gradient-to-b from-blue-500/30 to-purple-500/20 rounded-full hidden md:block"></div>
            
            {/* DevOps & Cloud Section */}
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="relative mr-2 group">
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded"></span>
                  DevOps & Cloud
                </span>
                <span className="text-xs font-normal text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded-full ml-2">
                  Infrastructure
                </span>
              </h3>
              <div className="flex flex-wrap gap-6 mt-4">
                {skillCategories['DevOps & Cloud'].map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.classList.add('hidden');
                          fallback?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-5 h-5 hidden text-xs font-medium">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <span className="font-medium text-sm">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* AI & Others Section */}
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="relative mr-2 group">
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded"></span>
                  AI & Others
                </span>
                <span className="text-xs font-normal text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20 px-2 py-0.5 rounded-full ml-2">
                  Specialized
                </span>
              </h3>
              <div className="flex flex-wrap gap-6 mt-4">
                {skillCategories['AI & Others'].map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.classList.add('hidden');
                          fallback?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-5 h-5 hidden text-xs font-medium">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <span className="font-medium text-sm">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Experience Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 transform -translate-y-1/2">
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-transparent rounded-full"></div>
          </div>
          <div className="absolute top-0 right-1/4 transform -translate-y-1/2">
            <div className="h-1 w-20 bg-gradient-to-l from-blue-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Achievements & Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
              Professional milestones and recognitions that showcase my expertise
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${achievement.hoverBg}`}
              >
                {/* Background Decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl transform group-hover:scale-125 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    {achievement.organization}
                  </p>
                  
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-xs rounded-full font-medium">
                    {achievement.type}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
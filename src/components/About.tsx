
const About = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "University of Petroleum and Energy Studies",
      period: "2021-2025",
      score: "CGPA: 9.1/10.0",
      status: "completed"
    },
    {
      degree: "Class XII CBSE",
      institution: "Higher Secondary Education",
      period: "2021",
      score: "96%",
      status: "completed"
    },
    {
      degree: "Class X CBSE",
      institution: "Secondary Education",
      period: "2019",
      score: "94.6%",
      status: "completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Personal Bio */}
          <div className="space-y-4 sm:space-y-6">
  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
    My Journey
  </h3>
  <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
    <p>
      My journey in technology began with 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> curiosity</span> and a desire 
      to understand how things work beneath the surface. That curiosity soon grew into a passion 
      for creating solutions that are not only intelligent but also 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> accessible</span> and meaningful.
    </p>
    <p>
      As a 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> Computer Science & Engineering </span> 
      graduate from the 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> University of Petroleum and Energy Studies (UPES) </span> 
      with a 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> 9.1</span> CGPA, and a certified professional in 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> AWS Solutions Architecture</span> and 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> Azure AI</span>, I’ve continually challenged myself 
      to explore new domains-ranging from cloud technologies and AI to full-stack web development.
    </p>
    <p>
      Beyond coding, I express myself through 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> public speaking</span> and 
      <span className="font-semibold text-teal-600 dark:text-teal-400"> writing</span>, which fuel 
      my creativity and help me connect with people. I believe that technology reaches its true potential when it is 
      human-centered, and my journey is guided by the vision of building solutions that are inclusive, impactful, and transformative.
    </p>
  </div>
</div>


          {/* Education Timeline */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Education
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-teal-600"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-4 sm:space-x-6 pb-6 sm:pb-8">
                  {/* Timeline Dot */}
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    edu.status === 'current' 
                      ? 'bg-teal-600 ring-2 sm:ring-4 ring-teal-200 dark:ring-teal-800' 
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg flex-1 shadow-sm ${
                    edu.status === 'current' ? 'border-l-4 border-teal-600' : ''
                  }`}>
                    <div className="flex flex-col space-y-1 mb-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 font-medium mt-1 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                        {edu.score}
                      </span>
                      {edu.status === 'current' && (
                        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


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

  const achievements = [
    "AWS Certified Solutions Architect - Associate",
    "Microsoft Certified: Azure AI Fundamentals",
    "Technical Content Writer & Co-author of DevOps book",
    "Research Intern at IIT Patna",
    "NSS Volunteer with community impact",
    "IEEE Technical Elite & ACM-W Core Committee Member"
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a Computer Science & Engineering graduate from the University of Petroleum 
                and Energy Studies with a 9.1 CGPA. As an AWS Certified Solutions Architect and Azure AI specialist, 
                my journey in technology is driven by a passion for creating accessible, AI-powered solutions that 
                make a real impact.
              </p>
              <p>
                From developing SignBridge (a bidirectional sign language interpreter) to building real-time chat 
                applications with secure encryption, I thrive on challenges that combine technical innovation with 
                social good. My expertise spans frontend development, AI integration, and full-stack web development 
                using React, Node.js, and Python.
              </p>
              <p>
                Beyond coding, I'm a published technical content writer, having co-authored a DevOps book on Continuous 
                Deployment & Automation. I'm also passionate about public speaking, dancing, and using technology to 
                create inclusive solutions for all users. My experience at TechCurators and IIT Patna has further 
                strengthened my ability to develop real-world applications that solve meaningful problems.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Achievements
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-600"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  {/* Timeline Dot */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    edu.status === 'current' 
                      ? 'bg-teal-600 ring-4 ring-teal-200 dark:ring-teal-800' 
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex-1 shadow-sm ${
                    edu.status === 'current' ? 'border-l-4 border-teal-600' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
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

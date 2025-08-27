
const Experience = () => {
  const experiences = [
    {
      title: "Frontend & AI Developer",
      company: "TechCurators, a TC Group Company",
      period: "Dec 2024 - Present",
      location: "New Delhi",
      status: "current",
      description: "Developing responsive web interfaces and integrating AI capabilities into client projects and internal platforms.",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Figma", "ChatGPT-4o", "Relevance AI"],
      achievements: [
        "Led frontend development of TOSS, an AI-driven SEO and branding platform",
        "Integrated dynamic UI components based on five natural elements",
        "Implemented AI capabilities using ChatGPT-4o and Relevance AI",
        "Created automated Lighthouse report analysis and data extraction agents"
      ]
    },
    {
      title: "Web & App Developer Intern",
      company: "Indian Institute of Technology (IIT) Patna",
      period: "Jun - Aug 2024",
      location: "Patna, India",
      status: "completed",
      description: "Developed and maintained responsive websites and mobile applications, ensuring cross-platform functionality and enhanced user experience.",
      technologies: ["ReactJS", "HTML/CSS", "JavaScript", "Bootstrap", "Flutter", "Git"],
      achievements: [
        "Developed and maintained responsive websites for institutional needs",
        "Built cross-platform mobile applications with Flutter",
        "Collaborated with cross-functional teams on design and feature implementation",
        "Applied agile development methodologies in an academic research environment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions through internships and collaborative projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - hidden on mobile */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-teal-600 transform lg:-translate-x-px hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-10 md:mb-16 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              {/* Timeline Dot - hidden on mobile */}
              <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-teal-600 rounded-full items-center justify-center transform lg:-translate-x-4 z-10 hidden md:flex">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className={`w-full lg:w-1/2 ${
                index % 2 === 0 ? 'lg:pr-12 ml-0 md:ml-16' : 'lg:pl-12 ml-0 md:ml-16'
              } lg:ml-0`}>
                <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  exp.status === 'current' ? 'border-l-4 border-teal-600' : ''
                }`}>
                  {/* Mobile experience header with current badge */}
                  <div className="md:hidden flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    {exp.status === 'current' && (
                      <span className="ml-2 px-2 py-0.5 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Desktop view header layout */}
                  <div className="hidden md:flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {exp.location}
                      </p>
                      {exp.status === 'current' && (
                        <span className="inline-block mt-1 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Mobile company and period info */}
                  <div className="md:hidden mb-3">
                    <p className="text-base text-teal-600 dark:text-teal-400 font-semibold">
                      {exp.company}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-5 md:mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5 md:mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 md:px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1.5 md:space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Involvement */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Leadership & Community Involvement
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "NSS Volunteer",
                organization: "National Service Scheme",
                period: "Jan 2023 - May 2024",
                description: "Identified community needs and problems, implemented solutions through service and social initiatives",
                impact: "Community Development"
              },
              {
                role: "IEEE Technical Elite",
                organization: "IEEE Student Branch, UPES",
                period: "May 2022 - May 2023",
                description: "Worked in the Student Chapter as a technical elite, assisted in planning and implementation of chapter portal",
                impact: "Technical Leadership"
              },
              {
                role: "Core Committee Member",
                organization: "ACM-W Student Chapter, UPES",
                period: "Nov 2021 - Jun 2022",
                description: "Served as CSR Core Committee member in the Student Chapter, promoting women in computing",
                impact: "Diversity & Inclusion"
              }
            ].map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {role.role}
                </h4>
                <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2">
                  {role.organization}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {role.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {role.description}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                  {role.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

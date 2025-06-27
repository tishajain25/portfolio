
const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Responsive web interfaces using modern frameworks like React, Next.js, and cutting-edge CSS technologies.",
      features: [
        "React & Next.js Development",
        "Responsive Design Implementation",
        "Modern CSS & Tailwind CSS",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"]
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Implementing AI capabilities in web applications using ChatGPT, TensorFlow, and other cutting-edge AI technologies.",
      features: [
        "ChatGPT API Integration",
        "Machine Learning Model Implementation",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI-Powered User Interfaces"
      ],
      technologies: ["ChatGPT-4o", "TensorFlow Lite", "Python", "Relevance AI", "CNN"]
    },
    {
      icon: "🌐",
      title: "Full-Stack Development",
      description: "End-to-end web application development with secure backends, databases, and real-time features.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Real-time Applications",
        "Authentication & Security",
        "Cloud Deployment"
      ],
      technologies: ["Node.js", "MongoDB", "Socket.IO", "Express", "MySQL"]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile applications using Flutter and React Native for iOS and Android platforms.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "UI/UX Design Implementation",
        "App Store Deployment",
        "Maintenance & Updates"
      ],
      technologies: ["Flutter", "React Native", "Android Studio", "Mobile UI/UX"]
    },
    {
      icon: "✍️",
      title: "Technical Writing",
      description: "DevOps and technology content creation, documentation, and co-authoring technical publications.",
      features: [
        "Technical Documentation",
        "DevOps Content Creation",
        "API Documentation",
        "Tutorial Writing",
        "Book Co-authoring"
      ],
      technologies: ["DevOps", "Technical Writing", "Documentation Tools", "Content Strategy"]
    },
    {
      icon: "💡",
      title: "Consulting",
      description: "AI implementation strategy, technical guidance, and architecture consultation for modern web applications.",
      features: [
        "AI Strategy Development",
        "Technology Stack Selection",
        "Architecture Planning",
        "Performance Optimization",
        "Best Practices Implementation"
      ],
      technologies: ["System Architecture", "AI Strategy", "Performance Optimization", "Code Review"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services & Expertise
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions spanning frontend development, AI integration, and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-teal-200 dark:hover:border-teal-800"
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding requirements, defining scope, and creating technical specifications."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Creating wireframes, UI/UX designs, and interactive prototypes using Figma."
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "Building robust solutions with modern technologies and AI integration."
              },
              {
                step: "04",
                title: "Testing & Deployment",
                description: "Comprehensive testing, optimization, and seamless deployment to production."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

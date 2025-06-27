
import { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "SignBridge",
      category: "AI/Accessibility",
      featured: true,
      description: "Bidirectional Sign Language & Speech Interpreter using AI for real-time accessibility solutions for the deaf and hearing-impaired community.",
      longDescription: "An innovative AI-powered platform that bridges communication gaps by providing real-time translation between sign language and speech. Uses advanced CNN models for accurate gesture recognition and Web Speech API for seamless audio processing.",
      technologies: ["React", "Python", "TensorFlow Lite", "Web Speech API", "Firestore", "CNN"],
      features: [
        "Real-time sign language recognition using CNN",
        "Bidirectional translation (sign to speech, speech to sign)",
        "Web-based interface for accessibility",
        "Firestore integration for user data management",
        "Cross-platform compatibility"
      ],
      impact: "Enhancing accessibility for the deaf and hearing-impaired community",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "NexaTalk",
      category: "Full-Stack",
      featured: true,
      description: "Real-time chat application with secure backend, featuring real-time messaging, authentication, and cross-device persistence.",
      longDescription: "A comprehensive real-time chat application built with modern web technologies. Features include secure user authentication, real-time messaging with Socket.IO, message encryption, and persistent chat history across devices.",
      technologies: ["Node.js", "ReactJS", "MongoDB", "Socket.IO", "JWT", "Express"],
      features: [
        "Real-time messaging with Socket.IO",
        "Secure user authentication and authorization",
        "Message encryption for privacy",
        "Cross-device chat persistence",
        "Responsive design for all devices",
        "Online/offline status indicators"
      ],
      impact: "Secure communication platform for seamless conversations",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Disease Tagging System",
      category: "AI/Healthcare",
      featured: true,
      description: "AI-based cardiovascular disease detection using ECG & fundus imaging with multimodal approach for improved accuracy.",
      longDescription: "An advanced healthcare AI system that combines ECG analysis and fundus imaging to detect cardiovascular diseases. Uses machine learning algorithms including EMD (Empirical Mode Decomposition) for enhanced diagnostic accuracy.",
      technologies: ["Python", "Machine Learning", "EMD Algorithm", "Medical Imaging", "AI/ML"],
      features: [
        "Multimodal approach combining ECG and fundus imaging",
        "EMD algorithm for signal processing",
        "High accuracy disease detection",
        "Medical image analysis capabilities",
        "Automated diagnostic recommendations"
      ],
      impact: "Early detection of cardiovascular diseases for better patient outcomes",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TOSS Platform",
      category: "Frontend/AI",
      featured: false,
      description: "AI-integrated platform development with modern frontend technologies and innovative user experience design.",
      longDescription: "Currently developing an innovative platform that integrates AI capabilities with modern frontend technologies. Focus on creating intuitive user experiences and seamless AI integration.",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Figma", "ChatGPT-4o"],
      features: [
        "AI-powered user interactions",
        "Modern responsive design",
        "Seamless user experience",
        "Integration with ChatGPT-4o",
        "Design system implementation"
      ],
      impact: "Innovation in AI-powered web applications",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ['All', 'AI/Accessibility', 'Full-Stack', 'AI/Healthcare', 'Frontend/AI'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining AI, accessibility, and modern web technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1 xl:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.featured && (
                    <span className="px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                    💡 {project.impact}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { number: "5+", label: "Projects Completed", icon: "🚀" },
            { number: "3", label: "AI Integrations", icon: "🤖" },
            { number: "2", label: "Open Source", icon: "💻" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

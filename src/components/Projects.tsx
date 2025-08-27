
import { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "SignBridge",
      category: "AI/Accessibility",
      featured: true,
      description: "Bidirectional Sign Language & Speech Interpreter using AI for real-time accessibility solutions for the deaf and hearing-impaired community.",
      longDescription: "A real-time AI system for two-way translation between sign language and speech/text. Built using CNN with TensorFlow Lite for sign recognition and Web Speech API for speech processing, this project aims to bridge communication gaps for the deaf and hearing-impaired community.",
      technologies: ["React", "Python", "TensorFlow Lite", "Web Speech API", "Firestore", "CNN", "Postimg", "Vercel"],
      features: [
        "Real-time sign language recognition using CNN",
        "Bidirectional translation (sign to speech, speech to sign)",
        "Web-based interface for accessibility",
        "Firestore integration for user data management",
        "Cross-platform compatibility",
        "Deployed on Vercel for global accessibility"
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
      description: "Real-time chat application with secure, scalable database backend, featuring robust authentication, encryption, and persistent messaging.",
      longDescription: "A real-time chat application built with a secure, scalable database backend. This project integrates robust authentication, encryption for privacy, and enables persistent messaging across devices for reliable communication.",
      technologies: ["Node.js", "ReactJS", "MongoDB", "Socket.IO", "JWT", "Express", "Encryption"],
      features: [
        "Real-time messaging with Socket.IO",
        "Secure user authentication and authorization",
        "End-to-end message encryption for privacy",
        "Cross-device chat persistence with MongoDB",
        "Responsive design for all devices",
        "Online/offline status indicators and typing notifications"
      ],
      impact: "Secure and reliable communication platform for seamless conversations across devices",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Disease Tagging using ECG & Fundus Imaging",
      category: "AI/Healthcare",
      featured: true,
      description: "AI-based system integrating ECG and fundus image data for improved cardiovascular disease detection and early diagnosis.",
      longDescription: "An AI-based system that integrates ECG and fundus imaging data to provide more accurate cardiovascular disease detection. This multimodal approach enables earlier and more accurate diagnosis through advanced signal processing and image analysis techniques.",
      technologies: ["Python", "Machine Learning", "EMD Algorithm", "Medical Imaging", "AI/ML", "Signal Processing"],
      features: [
        "Multimodal approach combining ECG and fundus imaging",
        "EMD (Empirical Mode Decomposition) algorithm for signal analysis",
        "High accuracy disease classification and tagging",
        "Advanced medical image processing techniques",
        "Support for early and accurate diagnosis",
        "Cardiologist-validated disease markers"
      ],
      impact: "Earlier detection of cardiovascular diseases leading to improved patient outcomes and treatment options",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TOSS Platform",
      category: "Frontend/AI",
      featured: false,
      description: "AI-driven SEO and branding platform integrating dynamic UI components based on five natural elements with advanced AI capabilities.",
      longDescription: "An AI-driven SEO and branding platform I led the frontend development for at TechCurators. This project integrates dynamic UI components based on five natural elements and leverages advanced AI capabilities using ChatGPT-4o and Relevance AI for automated analysis.",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Figma", "ChatGPT-4o", "Relevance AI", "Lighthouse API"],
      features: [
        "AI-powered SEO analysis and recommendations",
        "Automated Lighthouse report analysis",
        "Data extraction agents for web content",
        "Dynamic UI components based on natural elements",
        "Custom design system implementation",
        "Real-time performance monitoring"
      ],
      impact: "Enhanced SEO optimization and branding capabilities for businesses through AI-powered analysis",
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
